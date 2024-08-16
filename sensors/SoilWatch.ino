//#include <LiquidCrystal_I2C_STEM.h>
#include <Wire.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <esp_sleep.h>
#include <config.h>



/*********************************************************************************************************************************************************************************************/
//PIN DEFINES
/*********************************************************************************************************************************************************************************************/

unsigned int moistureAnalog = 34;   //Analog gives you a specific number based on moisture
unsigned int moistureDigital = 27;    //Can be used if you want just a high/low based on set value (potentiometer)

/*********************************************************************************************************************************************************************************************/
//DECLARATIONS
/*********************************************************************************************************************************************************************************************/

int sensorValue = 0;                //Used for aggregation of the results
int dataAverage = 0;                //This is the variable for the moisture level
int scaledValue = 0;
int dataAggregate = 0;  //Readings stored here before averaging
bool sendData = false;  //Tells the system to send the data to the site
bool wifiConnection = false;
int numReadings = 50;
uint64_t sleepTime = 7200000000;   //2 hours
int uS_To_S_factor = 0.000001;  //Conversion factor to go from microseconds to seconds

/*********************************************************************************************************************************************************************************************/
//FUNCTION DECLARATIONS
/*********************************************************************************************************************************************************************************************/

bool updateRow(int newVal);
int collectData(int& numReadings);
void goToSleep(uint64_t time);
bool connectWiFi();


/*********************************************************************************************************************************************************************************************/
//MAIN
/*********************************************************************************************************************************************************************************************/

//LiquidCrystal_I2C_STEM lcd(0x27, 16, 2);  //LCD used for testing purposes, might add in later for production


void setup() {
  Serial.begin(115200);
  pinMode(moistureAnalog, INPUT);                //Sets the corresponding pin for analog IN, 0x27 is an ADC by default
  delay(500);                                    //Delays are so system can catch up

  wifiConnection = connectWiFi();  //connectWiFi return true or false
  delay(200);
  Serial.println("Now entering the loop....");
}

void loop() {
  if (wifiConnection) {     //if true
    updateRow(collectData(numReadings));    //Sends whatever int is returned to update DB
  } else {              //If there is no connection established
    Serial.println("Cannot collect data....");
    Serial.println("No WiFi connection..... :(");
    sleepTime = 200;  //Shorter sleep time to allow for quicker retry of connection
  }
  //Serial.println("Entering sleep");
  delay(200);

  goToSleep(sleepTime);   //Sends system to low power mode
}



/*********************************************************************************************************************************************************************************************/
//FUNCTION DEFINTIONS
/*
*This function is used to update the DB at a specific row based on its unique 'id'
*Takes whatever scaled value was calculated and updates the DB for later fetching
*Uses HTTP method and JSON format
*/



bool updateRow(int newVal) {
  String tableURL = String(supabaseURL) + "/rest/v1/sensor_data?id=eq." + String(sensorID_2);   //Constructs the specific URL for the table and row

  HTTPClient http;
  http.begin(tableURL);
  http.addHeader("apikey", apiKey);
  http.addHeader("Authorization", "Bearer " + String(apiKey));
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Prefer", "return=minimal");   //Only returns the code

  String jsonData = "{\"moisture\":" + String(newVal) + "}";

  delay(100);

  int httpResponse = http.PATCH(jsonData);    //Updates the table

  delay(100);

  http.end();   //Free up resources

  if (httpResponse == 204) {
    return true;  // Successful update
  } else {
    Serial.print("HTTP error code: ");
    Serial.println(httpResponse);
    return false;  // Failed update
  }
}

/*******************************************************************************/
/*
*This function collects the data in trials, 2 sets which splits a predefined
*number. Set to 50 at the moment. 
*It collects the data, takes the average, then scales it to be between 0-100
*/
int collectData(int& num) {
  int flipVal;

  for (int i = 0; i < num; i++) {
    delay(200);
    sensorValue = analogRead(moistureAnalog);
    dataAggregate += sensorValue;
    if (i == (num/2)) {
      Serial.println("Mid Way Point.....");
      delay(10000);
    }
  }

  dataAverage = dataAggregate / num;    //Averaging
  dataAggregate = 0;    //Clear the count
  scaledValue = (dataAverage * 100) / 4095;   //Scales the value 100->0
  scaledValue = 100 - scaledValue;    //Flips the reading so it goes from 0->100 not 100->0

  Serial.println("Soil Moisture: ");
  Serial.println(scaledValue);

  delay(1000);
  return scaledValue;
}

/*******************************************************************************/
/*
*Sleep function for enhanced battery efficiency
*Takes time as microseconds (uSeconds)
*Allows the system to enter the loop once then sleeps
*Once awake it will go thru the setup function again
*/
void goToSleep(uint64_t time) {
  // Calculate the number of seconds for display purposes
  float seconds = static_cast<float>(time) / 1000000.0;  // Convert microseconds to seconds

  Serial.print("Entering sleep mode for: ");
  Serial.print(seconds, 2);  // Print with 2 decimal places
  Serial.println(" seconds");

  delay(1000);  // Optional delay for readability before sleep

  esp_deep_sleep(time); // Sends the system into deep sleep 
}

/*******************************************************************************/
/*
*This is used for establihing a connection to the WiFi
*Uses the WiFi.h library
*/
bool connectWiFi() {
  int wifiAttempts = 0;
  const char* name;
  const char* passkey;
  //bool networkMatch = false;
  Serial.println("***Scanning Networks***");
  int numNetworks = WiFi.scanNetworks();
  for(int i = 0; i < numNetworks; i++){
    if(ssid[0] == WiFi.SSID(i)){
      name = ssid[0];
      passkey = password[0];
      //networkMatch = true;
      break;
    }else if(ssid[1] == WiFi.SSID(i)){
      name = ssid[1];
      passkey = password[1];
      //networkMatch = true;
      break;
    }
  }

  WiFi.begin(name, passkey);   //Attempts to connect to the WiFi
  Serial.println("Connecting to WiFi");
  delay(1000);
  while ((WiFi.status() != WL_CONNECTED)) { //If not connected
    wifiAttempts += 1;    //Adds an attempt
    delay(500);
    if (wifiAttempts >= 10) {   //If the system tries more than 10 times, exit
      Serial.println("Error Connecting to WiFi....");
      Serial.println("Exceeded 10 attempts....");
      Serial.println("Aborting....");
      delay(3000);
      break;
    }
    Serial.println("Reattempting to establish WiFi connection.....");
    WiFi.begin(name, passkey); //Tries to connect with the WiFi again, allows for one attempt and run thru the loop
  }
  wifiAttempts = 0;   //Clears number of attempts after completing
  if (WiFi.status() == WL_CONNECTED) {  //If connected
    Serial.print("Connected to: ");
    Serial.println(name);
    delay(5000);
    return true;    //If connected
  } else {
    return false;   //If connection failed
  }
}

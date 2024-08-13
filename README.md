# The Soil Watch 🌱

## Overview
**The Soil Watch** is a web-based application designed to monitor soil moisture levels for plant care. This project aims to help users, like my parents, keep their plants healthy by providing real-time data and insights into soil conditions. The system uses an ESP32 microcontroller to collect moisture data, which is then stored in a Supabase database and displayed on a React-based website.

## Features
- **Real-Time Soil Moisture Monitoring:** Continuously tracks soil moisture levels.
- **Data Visualization:** Displays moisture data in an easy-to-understand format using charts and graphs.
- **User-Friendly Interface:** Simple and intuitive UI for easy navigation.
- **Mobile Responsive:** Accessible from any device, including smartphones and tablets.

## Tech Stack
- **Frontend:** React, Next.js
- **Backend:** Supabase (PostgreSQL)
- **Hardware:** ESP32 microcontroller, soil moisture sensors, buck converters, battery holders, and jumper wires
- **Other:** PlatformIO for ESP32 development, Arduino IDE

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Roenan-b/The-Soil-Watch.git
   cd The-Soil-Watch


2. **Ensure you have the following dependencies:**

   ```bash
   pnpm
   @supabase/supabase-js


3. **Set up Supabase:**
- Create a project in Supabase and set up your database schema.
- Update the environment variables in `.env.local` with your Supabase keys.

4. **Upload the ESP32 Code:**
- Flash the `moisture_sensor.ino` code onto your ESP32 using the Arduino IDE or PlatformIO.
- Create your own `config.h` file with your keys and IDs.
- If using multiple MCUs, manually adjust the sensor variable holding the ID as needed.

5. Run the development server:
   ```bash
   pnpm dev

The site will be available at [http://localhost:3000](http://localhost:3000).



## Usage

- Visit the `Soil Stats` page to view the current soil moisture levels for each plant.
- The system collects data 12 times over a 24-hour period.

## Future Enhancements

- **Notifications:** Add SMS/email alerts for low soil moisture levels.
- **Additional Sensors:** Integrate temperature and humidity sensors for comprehensive plant care.
- **User Authentication:** Allow multiple users to manage their plants.

## License

This project is open-source and available under the [GNU General Public License (GPL)](LICENSE).

## Acknowledgments

- Thanks to the open-source community for the tools and libraries used in this project.
- Special shoutout to my parents for inspiring this project and being the first users!

## Contact

Feel free to reach out via [LinkedIn](www.linkedin.com/in/roenan) for any questions or collaboration opportunities.


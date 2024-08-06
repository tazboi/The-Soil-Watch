import "../styles/styles.css";
import React from "react";
import HomePageNav from "./components/homePageNav"


export const metadata = {
  title: "Soil Monitor",
  description: "For Soil Monitoring",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <HomePageNav/>
      <main>{children}</main>
      </body>
      </html>
  );
}

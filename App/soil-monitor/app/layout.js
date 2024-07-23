import { Inter } from "next/font/google";
import "../styles/styles.css";
import React from "react";



export const metadata = {
  title: "Soil Monitor",
  description: "For Soil Monitoring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

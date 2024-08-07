import "../styles/styles.css";
import React from "react";
import HomePageNav from "./components/homePageNav"


export const metadata = {
  title: "The Soil Watch",
  description: "A Home for The Watchers of Soil",
    // icons: {
    //     icon: "/favicon.ico",
    // },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <link rel="favicon" href="/favicon.ico" sizes="any"/>
      <HomePageNav/>
      <main>{children}</main>
      </body>
      </html>
  );
}

import "../styles/styles.css";
import React from "react";
import HomePageNav from "./components/homePageNav"


export const metadata = {
  title: "The Soil Watch",
  description: "A Home for The Watchers of Soil",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
          <title>The Soil Watch</title>
          <meta name="description" content="A Home for The Watchers of Soil" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <HomePageNav/>
      <main>{children}</main>
      </body>
      </html>
  );
}

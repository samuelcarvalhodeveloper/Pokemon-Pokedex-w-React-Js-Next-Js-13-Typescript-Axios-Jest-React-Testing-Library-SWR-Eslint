import "../assets/css/global_styles/global_styles.css";
import "../assets/css/pokemon_card_styles/pokemon_card_background_styles.css";
import "../assets/css/pokemon_card_styles/pokemon_card_type_styles.css";
import { Inter } from "next/font/google";
import React, { JSX } from "react";
import { Metadata } from "next";
import INDEX_PAGES_TITLE from "../constants/pages/index/window/page_title/indexPageTitleConstants";
import DefaultHeader from "../components/page_agnostic/default_header/implementation/DefaultHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: INDEX_PAGES_TITLE,
};

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultHeader />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

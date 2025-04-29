"use client";

import "../styles/globals.css";
import { Navbar } from "@heroui/navbar";
import { NavbarBrand, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

import { MemeProvider } from "../context/MemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-sans text-black dark:text-white">
        <div className="absolute inset-0 bg-[url('/images/bg-abstraction.webp')] bg-cover bg-center opacity-70 -z-10 w-screen h-screen" />
        <MemeProvider>
          <Navbar>
            <NavbarBrand>
              <Link className="font-bold text-lg" href="/">
                Meme Catalog
              </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link href="/table">Table View</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/list">List View</Link>
            </NavbarItem>
          </Navbar>
          <main className="p-4">{children}</main>
        </MemeProvider>
      </body>
    </html>
  );
}

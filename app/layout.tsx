import type React from "react";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Apex UI | Web, App, and UI/UX Development Services",
  description:
    "The Apex UI offers top-notch web, app, and UI/UX development services to elevate your digital presence.",
  keywords: "web development, app development, UI/UX design, digital services, software development, The Apex UI",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} font-urbanist`}>
        {children}
      </body>
    </html>
  );
}

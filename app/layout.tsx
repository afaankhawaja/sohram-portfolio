// app/layout.tsx (your existing RootLayout file)
import type React from "react";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar"; // Import the new component
import FooterSection from "@/components/FooterSection";

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
    "The Apex UI offers top-notch Web, App, and UI/UX development services to elevate your digital presence.",
  keywords:
    "web development, app development, UI/UX design, digital services, software development, The Apex UI",
  generator: "v0.dev",
  icons: {
    icon: "/assets/A.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} font-urbanist`}>
        <div className="sticky  top-1 z-50 w-full h-full">
          {/* Use the new ConditionalNavbar here */}
          <ConditionalNavbar />
        </div>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

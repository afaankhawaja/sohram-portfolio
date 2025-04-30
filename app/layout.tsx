import type React from "react"
import type { Metadata } from "next"
import { Inter, Urbanist } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sohram's Portfolio | UI UX Designer",
  description: "Portfolio website for Sohram, a UI UX Designer with 5 years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} font-urbanist`}>{children}</body>
    </html>
  )
}

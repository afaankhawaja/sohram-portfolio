// components/ConditionalNavbar.tsx
"use client"; // This directive makes it a client component

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar"; // Import your existing Navbar component
import React from "react";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // If the current path is '/hire-us', don't render the Navbar
  if (pathname === "/hire-us") {
    return null; // Don't render anything
  }

  // Otherwise, render the Navbar
  return <Navbar />;
}

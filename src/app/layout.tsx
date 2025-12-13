import type { Metadata } from "next";
// Metadata defines hidden information for search engines and browsers like tab title, page description and link preview images
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar"
import { Inter } from "next/font/google";



// Font files Geist is default Next.js font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Inter font style
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Stars & Stripes Insurance",
  description: "Trusted insurance for South Florida businesses",
};


// RootLayout is the most important component in Next.js that defines HTML structure like body, for the entire website
export default function RootLayout({
  children, // special variable that represents whatever content is nested inside a component's opening and closing tags
}: Readonly<{
  children: React.ReactNode; // Typescript definition that describes any context like text and numbers that React is able of rendering on screen
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

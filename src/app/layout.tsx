import type { Metadata } from "next";
// Metadata defines hidden information for search engines and browsers like tab title, page description and link preview images
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


// Font files - Poppins for bold, modern design
const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


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
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {/* All pages will be in 'children' don't label any pages content  */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
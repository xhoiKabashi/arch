import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"], // Specify the subset(s) you want to load
  weight: ["400", "500", "700"], // Specify the font weights you need
  variable: "--font-jost", // Optional: Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jost.className}
      > <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

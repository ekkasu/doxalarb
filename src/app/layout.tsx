import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DoxaLarb Ventures | Premium Industrial & Lab Supplies",
  description: "Your trusted partner for comprehensive industrial, medical, and general goods across Ghana and Africa. From advanced laboratory equipment to heavy-duty industrial materials.",
  keywords: "industrial supplies, laboratory equipment, oil and gas, agricultural products, Ghana, Africa, PPE, plumbing, electrical materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

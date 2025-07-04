import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  style: ["italic", "normal"],
  display: "optional",
  preload: false,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Accomplishment tracker",
  description: "Website Tracker for accomplishment and itinerary Reports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

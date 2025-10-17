import type { Metadata } from "next";
import { Caudex, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caudex = Caudex
({
  subsets: ['latin'],
  weight: ['400', '700'], // 400=regular, 700=bold
  variable: '--font-caudex',
});

export const metadata = {
  title: 'Moonveil',
  description: 'Fantasy game world',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caudex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

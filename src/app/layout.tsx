import type { Metadata } from "next";
import { Caudex, Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"], // 400=regular, 700=bold
  variable: "--font-caudex",
});

// 👇 Add Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose any weights you need
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Moonveil",
  description: "Fantasy game world",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${caudex.variable} ${roboto.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}

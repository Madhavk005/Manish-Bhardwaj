import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Edits That Move People | Manish Bhardwaj",
  description: "I help creators and brands craft videos people remember, share and watch till the end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400,900,800&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-heading: 'Satoshi', sans-serif;
          }
        `}</style>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

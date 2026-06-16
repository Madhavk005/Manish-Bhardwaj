import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Manish Bhardwaj | Premium Video Editor & Content Strategist",
  description: "High-end video editing and creative direction. Crafting cinematic visuals and scroll-stopping content for leading brands and creators.",
  keywords: ["Video Editor", "Content Strategist", "Cinematography", "Video Production", "Premiere Pro", "After Effects", "Social Media Management"],
  authors: [{ name: "Manish Bhardwaj" }],
  creator: "Manish Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manishbhardwaj.com",
    title: "Manish Bhardwaj | Premium Video Editor & Content Strategist",
    description: "High-end video editing and creative direction. Crafting cinematic visuals and scroll-stopping content for leading brands and creators.",
    siteName: "Manish Bhardwaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Bhardwaj | Premium Video Editor & Content Strategist",
    description: "High-end video editing and creative direction. Crafting cinematic visuals and scroll-stopping content for leading brands and creators.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

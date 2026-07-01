import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: "TravNest — Luxury Himalayan Stays & Curated Stories",
  description: "Discover the Himalayas like never before. Luxury stays, curated adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background text-white antialiased selection:bg-white/20">
      <body className={`${inter.variable} ${playfair.variable} font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
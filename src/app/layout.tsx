import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ARCHITECT INTEZAR | Spaces for Modern Living & Luxury Estates",
  description:
    "Award-winning architectural studio & luxury interior design by Architect Intezar. Designing spaces for modern living with uncompromising detail and elegance.",
  keywords: [
    "Architect Intezar",
    "Luxury Architecture",
    "Villa Design",
    "BIM Engineering",
    "Modern Living",
    "Interior Architecture",
  ],
  authors: [{ name: "Architect Intezar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-white text-slate-900 selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

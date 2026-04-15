import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farhan Asif Aluminium and Glass Fixing L.L.C. | Premium Aluminium & Glass Solutions in Dubai",
  description:
    "Dubai-based specialists in premium aluminium doors and windows, glass partitions, balcony structures, rolling shutters, kitchen cabinets, and custom aluminium and glass fabrication.",
  keywords: [
    "Farhan Asif Aluminium and Glass Fixing L.L.C.",
    "aluminium and glass Dubai",
    "glass partitions Dubai",
    "aluminium doors and windows Dubai",
    "rolling shutters Dubai",
    "kitchen cabinets Dubai",
    "custom aluminium work Dubai",
  ],
  openGraph: {
    title: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
    description:
      "Precision-crafted aluminium and glass solutions for residential, commercial, and custom projects across Dubai.",
    siteName: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

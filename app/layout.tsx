import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { LanguageProvider } from "./components/language-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  icons: {
    icon: "/gallery/logo.png",
    apple: "/gallery/logo.png",
  },
  openGraph: {
    title: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
    description:
      "Precision-crafted aluminium and glass solutions for residential, commercial, and custom projects across Dubai.",
    siteName: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/gallery/logo.png",
        width: 1024,
        height: 1024,
        alt: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
      },
    ],
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
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

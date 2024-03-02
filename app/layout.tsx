import type { Metadata } from "next";

import { Baskervville, Newsreader } from "next/font/google";
import "./globals.css";

const font = Newsreader({ subsets: ["latin"], weight: "400", style: "italic" });

export const metadata: Metadata = {
  title: "Seasonal",
  description: "Fruits and vegetables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

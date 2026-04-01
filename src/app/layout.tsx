import type { Metadata } from "next";
import { JetBrains_Mono, Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Turing Gallery",
  description:
    "An interactive gallery where you guess whether literature, film, and music were created by humans or AI. Prototype: Literature module.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

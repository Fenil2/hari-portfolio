import type { Metadata } from "next";
import {
  Big_Shoulders_Display,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  variable: "--font-big-shoulders",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Harivignesh S - Social Media Marketing Manager",
  description:
    "Portfolio for Harivignesh S, Social Media Marketing Manager and Strategist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bigShoulders.variable} ${jetBrainsMono.variable} bg-[var(--paper)] font-sans text-[var(--ink)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[var(--paper)] font-sans text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}

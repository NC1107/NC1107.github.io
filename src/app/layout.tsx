import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Nicholas Conn",
  description: "Software Engineer | Self-hosted enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} font-mono antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="pt-[56px] flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

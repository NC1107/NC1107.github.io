import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Nicholas Conn",
  description: "Personal portfolio and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} font-mono antialiased`}>
        <Navbar />
        <main className="pt-[60px]">{children}</main>
      </body>
    </html>
  );
}

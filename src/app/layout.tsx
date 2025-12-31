import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Outfit for headings, Inter for body
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Wafi Engineering",
  description:
    "Sustainable Infrastructure, Integrated Digital Engineering, & Engineered Product Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen bg-slate-950`}
      >
        <Header />
        <main className="grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fuzzy Kids — Soft toys, big smiles",
  description: "Handpicked plushies and gift sets crafted with love for little ones everywhere.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}
        <Navbar/>
       <Footer/>
      </body>
    </html>
  );
}

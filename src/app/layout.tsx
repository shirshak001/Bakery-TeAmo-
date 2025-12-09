import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundMusic from "../components/BackgroundMusic";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Mielo Bakes - Bite-sized Joy. Baked Fresh. Shared with Love.",
  description: "Experience the sweetest treats at Mielo Bakes. Fresh-baked cookies, cakes, and pastries made with love. Order online for pickup or delivery.",
  keywords: "bakery, fresh baked goods, cookies, cakes, pastries, desserts, Mielo Bakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <BackgroundMusic />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

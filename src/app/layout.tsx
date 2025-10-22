import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Te Amo Bakery - Bite-sized Joy. Baked Fresh. Shared with Love.",
  description: "Experience the sweetest treats at Te Amo Bakery. Fresh-baked cookies, cakes, and pastries made with love. Order online for pickup or delivery.",
  keywords: "bakery, fresh baked goods, cookies, cakes, pastries, desserts, Te Amo Bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

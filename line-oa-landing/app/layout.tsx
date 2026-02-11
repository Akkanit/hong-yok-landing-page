import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scam Protection LINE OA - Real-time Fraud Detection",
  description: "Protect yourself from scams with our intelligent fraud detection system. Get personalized threat alerts, verify suspicious content, and connect directly with authorities.",
  keywords: "scam protection, fraud detection, LINE OA, Thailand, scam alerts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

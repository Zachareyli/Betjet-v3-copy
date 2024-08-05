import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bet.co.za | Skyward",
  description: "Experience the excitement of Skyward, the innovative new casino game, now available at Bet.co.za. Explore a world of thrilling gameplay and discover other Evolution Gaming and Bet Games products.",
};

export default function RootLayout({
}) {
  return (
    <html lang="en">
     <body>
     <Home/>
     </body>
    </html>
  );
}

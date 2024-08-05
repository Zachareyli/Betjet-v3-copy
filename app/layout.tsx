import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar";
import TailwindNavbar from "@/components/navbarTailwind";
import Banner from "@/components/bannerTailwind";
import ProductList from "@/components/products";
import PromoSection from "@/components/promoSection";
import ContactUs from "@/components/contactUs";
import HeaderSection from "@/components/nextHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bet.co.za | Skyward",
  description: "Experience the excitement of Skyward, the innovative new casino game, now available at Bet.co.za. Explore a world of thrilling gameplay and discover other Evolution Gaming and Bet Games products.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <meta name="keywords" content="Skyward, Bet.co.za, Evolution Gaming, Bet Games, online casino, new games" />
        <meta property="og:title" content="Skyward Has Landed at Bet.co.za!" />
        <meta property="og:description" content="Experience the thrill of Skyward, the innovative new casino game, now available at Bet.co.za." />
        <meta property="og:url" content="https://www.bet.co.za/" /> <meta property="og:image" content="https://www.bet.co.za/img/26436/og-image.png" /> <meta property="twitter:title" content="Skyward Has Landed at Bet.co.za!" />
        <meta property="twitter:description" content="Experience the thrill of Skyward, the innovative new casino game, now available at Bet.co.za." />
        <meta property="twitter:card" content="https://www.bet.co.za/img/26436/og-image.png" />
        <HeaderSection />
        <Banner />
        <TailwindNavbar />
        {/* <Navbar/> */}
        <PromoSection />
        <ProductList />
        <ContactUs />
      </body>
    </html>
  );
}

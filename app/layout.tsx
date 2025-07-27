import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = Inter({ subsets: ["latin"],weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], display: "swap" });

export const metadata: Metadata = {
  title: "Acquireon",
  description: "We help B2B service providers consistently book qualified sales calls through targeted LinkedIn client acquisition frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <div className="bg-indigo-500 flex justify-center items-center py-2 text-white text-sm relative">
          <p>Join 25+ B2B service providers in the acquisition process</p>
        </div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

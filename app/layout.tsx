import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope, Montserrat, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/Navbar1";

const font = Poppins({ subsets: ["latin"],weight: ["100","200", "300", "400", "500", "600", "700", "800"] });

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
        {/* <div className="bg-indigo-500 flex justify-center items-center py-2 text-white text-sm relative">
          <p>⭐ We're offering 50% off to our first clients ⭐</p>
        </div> */}
        <Navbar1/>
        {children}
      </body>
    </html>
  );
}

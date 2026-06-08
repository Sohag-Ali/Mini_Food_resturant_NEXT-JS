import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Yatun khaijan",
    template: "%s | Yatun khaijan",
  },
  description: "Best food review website in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-5 py-2 flex  items-center justify-between gap-5 bg-stone-800">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Yatun khaijan logo"
              className="w-[120px]"
              width={120}
              height={50}
            />
          </Link>

          <div className="space-x-5">
            <Link prefetch={false} className="btn" href="/foods">
              Food
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}

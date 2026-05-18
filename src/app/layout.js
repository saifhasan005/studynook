import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/Component/Navbar";
import "./globals.css";
import Footer from "@/Component/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookNook",
  description: "BookNook is a virtual library booking system, user can easily library ",
};

export default function RootLayout({ children }) {
  return (
    <html class='dark'
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="flex flex-col min-h-screen">
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>

        <Footer /> 

      </body>
    </html>
  );
}

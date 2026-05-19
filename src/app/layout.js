import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/Component/Navbar";
import "./globals.css";
import Footer from "@/Component/Footer";
import { ToastContainer } from "react-toastify"; 
import NextTopLoader from "nextjs-toploader";

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
  description: "BookNook is a virtual library booking system, user can easily library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-screen">
        <NextTopLoader color="#6b21a8" showSpinner={false} /> {/* #6b21a8 হলো purple-800 */}
        <Navbar />
        <main className="flex-grow">
          {children}
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeoWallet",

  description: "Student Budget Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">

<div className="fixed top-0 left-0 h-96 w-96 rounded-full bg-cyan-500 blur-[180px] opacity-10"></div>

<div className="fixed bottom-0 right-0 h-96 w-96 rounded-full bg-green-500 blur-[180px] opacity-10"></div>

<div className="fixed top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 blur-[220px] opacity-5"></div>

  <AuthProvider>

    {children}

  </AuthProvider>

</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import {Montserrat} from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Brokinla",
  description: "Brokinla",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400']
})

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <Analytics/>
      </head>
      <body
        className="bg-gray-50"
      >
        {children}
      </body>
    </html>
  );
}

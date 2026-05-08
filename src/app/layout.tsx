import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: "TechX'26 — Decentralised Contributions Open Source and Web3",
  description: 'TechX is an innovation Experience for builders and creators. Ideas come to life through hackathons and collaboration. Built for real impact.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

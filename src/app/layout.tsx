import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: "TechX'26 - Decentralised Contributions: Open Source and Web3",
  description: "25-day virtual hackathon + physical conference finale in Jalingo, Taraba State. Build decentralised solutions and open source tools. Win ₦10M in prizes and connect with 400+ builders and ecosystem leaders.",
  
  openGraph: {
    title: "TechX'26 - Northern Nigeria's Biggest Tech Event",
    description: "25-day virtual hackathon (200+ projects) → Physical conference in Jalingo on 25 July. Open Source & Web3 focus.",
    url: "https://techx.sandlip.com",
    siteName: "TechX by Sandlip",
    images: [
      {
        url: "https://lh3.googleusercontent.com/d/18rgX5puMue5snL0AerzARucaYXxz_gmb",
        width: 1280,
        height: 720,
        alt: "TechX'26 Hackathon & Conference",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TechX'26 - Northern Nigeria's Biggest Tech Event",
    description: "25-day hackathon + conference in Jalingo. Builders wanted.",
    images: ["https://lh3.googleusercontent.com/d/18rgX5puMue5snL0AerzARucaYXxz_gmb"],
  },
};

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

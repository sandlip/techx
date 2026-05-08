"use client"

import Image from 'next/image'
import Link from 'next/link'
import RegisterButton from './RegisterButton'

const Header = () => {

  return (
    <main className="sticky top-0 z-50 bg-white border-b border-woodsmoke-200 shadow-sm">
      <div className="app-container py-4 flex items-center justify-between">
        <Link href="/" className="">
          <Image src="/logo/logo-black.png" alt="TechX" width={100} height={40} priority />
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link href="#gallery">Gallery</Link>
          <Link href="#highlight">Highlight</Link>
          <Link href="#partners">Partners</Link>
        
          <RegisterButton
            label="Register Now"
            buttonClass="btn btn-primary bg-stripes"
            arrowClass="px-1.5"
          />
        </div>
      </div>
    </main>
  )
}

export default Header

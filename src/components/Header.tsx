"use client"

import Image from 'next/image'
import Link from 'next/link'
import RegisterButton from './RegisterButton'

const Header = () => {

  return (
    <main className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-3 border-b border-woodsmoke-200 shadow-sm">
      <Image src="/logo/logo-black.png" alt="TechX" width={88} height={28} priority />

      <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
        <Link href="#partners">Partners</Link>
        <Link href="#speakers">Speakers</Link>
        <Link href="#community">Community</Link>
        <Link href="#hackathon">Hackathon</Link>
        <Link href="#blog">Blog</Link>
      
        <RegisterButton
          label="Register Now"
          buttonClass="btn btn-primary bg-stripes"
          arrowClass="px-1.5"
        />
      </div>
    </main>
  )
}

export default Header

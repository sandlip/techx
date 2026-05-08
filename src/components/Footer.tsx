import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram, BsLinkedin, BsTwitterX, BsX, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-woodsmoke-950 text-white">
      <div className="app-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Image src="/logo/logo-white.png" alt="TechX" width={250} height={40} />

          <div className="flex items-center gap-5 text-xl">
            <Link href="https://x.com/sandlip_oasis" target="_blank" rel="noopener noreferrer" className="">
              <BsTwitterX />
            </Link>
            
            <Link href="https://linkedin.com/company/sandlip" target="_blank" rel="noopener noreferrer" className="">
              <BsLinkedin />
            </Link>
            
            <Link href="https://instagram.com/sandliphq" target="_blank" rel="noopener noreferrer" className="">
              <BsInstagram />
            </Link>
            
            <Link href="https://youtube.com/@sandlip" target="_blank" rel="noopener noreferrer" className="">
              <BsYoutube />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-woodsmoke-800 text-xs">
          <span>© 2026 TechX. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

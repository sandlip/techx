import Image from 'next/image'
import Link from 'next/link'
import LinkButton from './LinkButton'

const Header = () => {
  const registrationLink = ""

  return (
    <main className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-3 border-b border-woodsmoke-200 shadow-sm">
      <Image src="/logo/logo-black.png" alt="TechX" width={88} height={28} priority />

      <div className="hidden sm:flex items-center gap-2">
        <Link href="#partners">Partners</Link>
        <Link href="#speakers">Speakers</Link>
        <Link href="#community">Community</Link>
        <Link href="#hackathon">Hackathon</Link>
        <Link href="#blog">Blog</Link>
      
        <LinkButton
          buttonClass="btn btn-primary bg-stripes"
          label="Register Now"
          linkHref={registrationLink}
        />

        <LinkButton
          buttonClass="btn btn-secondary bg-stripes"
          label="Sponsor TechX&apos;26"
          linkHref="mailto:partnerships@sandlip.com"
        />
      </div>
    </main>
  )
}

export default Header

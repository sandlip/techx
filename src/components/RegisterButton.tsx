import Link from 'next/link'
import { PiArrowUpRight } from 'react-icons/pi'

const RegisterButton = ({ buttonClass, label, arrowClass = "py-2.5 px-3.5" }: { buttonClass: string; label: string; arrowClass?: string }) => {
  const registrationLink = "https://sandlip.com/events/iik517ws"

  return (
    <Link href={registrationLink} className="flex items-center group cursor-not-allowed"
      target="_blank" rel="noopener noreferrer"
      title="Registration will open on June 1st, 2026"
    >
      <span className={buttonClass}>{label}</span>

      <span className={`btn btn-ghost group-hover:bg-stone-300 bg-stripes px-1.5 ${arrowClass}`}>
        <PiArrowUpRight className="text-xl" />
      </span>
    </Link>
  )
}

export default RegisterButton

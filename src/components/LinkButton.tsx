import Link from 'next/link'
import { PiArrowUpRight } from 'react-icons/pi'

const LinkButton = ({ buttonClass, label, linkHref = "mailto:partnerships@sandlip.com", arrowClass = "py-2.5 px-3.5" }: { buttonClass: string; label: string; linkHref?: string; arrowClass?: string }) => {
  return (
    <Link href={linkHref} className="flex items-center group" target="_blank" rel="noopener noreferrer">
      <span className={buttonClass}>{label}</span>

      <span className={`btn btn-ghost group-hover:bg-stone-300 bg-stripes px-1.5 ${arrowClass}`}>
        <PiArrowUpRight className="text-xl" />
      </span>
    </Link>
  )
}

export default LinkButton

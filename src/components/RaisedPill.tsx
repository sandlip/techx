import React from 'react'

const RaisedPill = ({ label, backColour }: { label: string; backColour?: string }) => {
  const pillStyle = "bg-primary bg-stripes px-3.5 py-1.5"

  return (
    <section className="relative w-fit">
      <aside className={`border-box z-10 relative font-bold ${backColour ? backColour : pillStyle}`}>
        {label}
      </aside>

      <aside className={`border-box bg-black h-full w-full absolute top-1 right-1`}>
      </aside>
    </section>
  )
}

export default RaisedPill

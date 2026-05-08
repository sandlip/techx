import React from 'react'

const RaisedCard = ({ backColour, children }: { backColour: string; children: React.ReactNode }) => {
  return (
    <section className="relative">
      <aside className="border-box z-10 relative">
        {children}
      </aside>

      <aside className={`border-box ${backColour} h-full w-full absolute top-2 left-2`}>
      </aside>
    </section>
  )
}

export default RaisedCard

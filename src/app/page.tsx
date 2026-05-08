'use client'

import Link from 'next/link'
import { useState } from 'react'
import LinkButton from '../components/LinkButton'
import RaisedCard from '../components/RaisedCard'
import RaisedPill from '../components/RaisedPill'
import { Achievements, FAQs, Highlights, PartnerBenefits, SponsorshipTiers } from '../lib/KeyData'
import { IoIosArrowDown } from 'react-icons/io'
import RegisterButton from '../components/RegisterButton'

/* ─────────────── DATA ─────────────── */
const gallery = [
  "https://lh3.googleusercontent.com/d/1IAOmyLf9eGgfroba_KFE_QjH4mgJzMVz",
  "https://lh3.googleusercontent.com/d/17BfciHRavEUYGUb_7wJKTa_B1aiFMTKs",
  "https://lh3.googleusercontent.com/d/12Vi9LLmEIF38NxYHSzY6OMeTrqKB5Pus",
  "https://lh3.googleusercontent.com/d/148J5i6B9PT2uA3Iw_9G_sqotF835bAYE",
  "https://lh3.googleusercontent.com/d/1IXCjM9pQGSd_ggLf6RU9G2I5Z_hTirW4",
  "https://lh3.googleusercontent.com/d/1FZg2AJWDl3sc0Bbxw3Z2p8Kue2QEeQRP",
  "https://lh3.googleusercontent.com/d/17XhfH58_1WADdRl4inh8BqpjqhbJuNSn",
  "https://lh3.googleusercontent.com/d/1Nrn7KTSOb-UYsF8SvAUpkD6LKpTLMejT",
  "https://lh3.googleusercontent.com/d/1Bx8MsfJh5lu_lD5WuUo6hftaSNS-QavI",
  "https://lh3.googleusercontent.com/d/1cqihfruIKt9VoSpyfRbTNwbwjIun-LQB",
  "https://lh3.googleusercontent.com/d/1CCp6VVOHhSDU49vcxNlDBRFAfVsxfg3A",
  "https://lh3.googleusercontent.com/d/1EqJz3MOpNvCNU-b2kd43qpSWvt9UXH4d",
]

const testimonials = [
  { name: 'Chinedu Okafor', role: 'Software Engineer',    quote: 'TechX gave me the platform to showcase my skills and connect with amazing mentors. The experience was transformative.',          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  { name: 'Amina Bello',    role: 'Product Designer',     quote: 'The mentorship and community support helped me grow professionally. I built connections that last till today.',                  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { name: 'Ibrahim Sani',   role: 'Blockchain Developer', quote: 'From hackathon to conference, every moment was valuable. The exposure to real-world problems changed my perspective.',          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
]

const HERO = "https://lh3.googleusercontent.com/d/1rTYMJbARMk4UApXOwvembk9YpXgHJT3K"

export default function HomePage() {
  const [open, setOpen] = useState<number | null>(null)
  const reg = ""

  return (
    <main className="bg-woodsmoke-100">

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="bg-cover bg-center border-b-8 border-harlequin-400" style={{ backgroundImage: `url('${HERO}')` }}>
        <aside className="bg-black/80 bg-mesh w-full h-[80vh] px-6 py-12">
          <div className="app-container text-white flex flex-col items-start justify-center h-full">
            <span className="bg-harlequin-400/13 border-2 border-harlequin-400 font-semibold text-lg px-4 py-1.5">
              TechX'26
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              DECENTRALISED<br />CONTRIBUTIONS OPEN<br />SOURCE AND WEB3
            </h1>

            <p className="text-xl">
              June 25 - July 25 2026. Virtual Hackathon + Physical Conference in Jalingo, Taraba State
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <RegisterButton
                label="Register Now"
                buttonClass="btn btn-primary bg-stripes py-2.5 px-6"
              />

              <LinkButton
                label="Sponsor TechX&apos;26"
                buttonClass="btn btn-secondary bg-stripes py-2.5 px-6"
              />
            </div>
          </div>
        </aside>
      </section>

      {/* ══ ABOUT ═══════════════════════════════════════════════════ */}
      <section className="app-container grid sm:grid-cols-12 gap-y-10 py-20">
        <aside className="col-span-1">
          <RaisedPill label="About" />
        </aside>

        <aside className="col-span-11 space-y-10">
          <article className="text-4xl sm:text-5xl text-woodsmoke-500 font-semibold leading-snug">
            TechX is an innovation <span className="text-woodsmoke-950 font-bold">Experience</span> for builders and creators. Ideas come to life through <span className="text-woodsmoke-950 font-bold">hackathons</span> and <span className="text-woodsmoke-950 font-bold">collaboration</span>. Built for real impact.
          </article>

          <div className="grid md:grid-cols-3 gap-8">
            {Achievements.map((achievement, index) => (
              <RaisedCard key={index} backColour={achievement.bgClass}>
                <div className="p-5 bg-white">
                  <h6 className={`text-sm font-medium text-right ${achievement.textClass}`}>{achievement.year}</h6>
                  <h3 className="text-3xl font-bold">Achievements</h3>
                  <p className="mt-3 text-woodsmoke-600">{achievement.text}</p>
                </div>
              </RaisedCard>
            ))}
          </div>
        </aside>
      </section>

      {/* ══ WHAT TO EXPECT ══════════════════════════════════════════ */}
      <section id="highlight" className="bg-catalina-950/10 py-10">
        <div className="app-container space-y-12">
          <RaisedPill label='Highlight' />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-5xl font-bold">What to expect</h2>

            <article className="w-full max-w-sm text-lg">
              Join us for a Techx’26 designed to spark ideas, forge partnerships, and shape what's next.
            </article>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {Highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 grid grid-rows-4 sm:grid-rows-5">
                <div className="row-span-3 sm:row-span-4 grid grid-cols-12 items-start gap-2">
                  <h3 className="col-span-11 text-3xl font-bold leading-snug">{highlight.title}</h3>
                  <span className="col-span-1 text-right text-sm font-semibold text-secondary">0{index + 1}</span>
                </div>
                
                <p className="">{highlight.desc}</p>
              </div>
            ))}

            {/* dark CTA card */}
            <div className="bg-secondary bg-mesh p-6 grid grid-rows-4 sm:grid-rows-5">
              <div className="row-span-3 sm:row-span-4">
                <h3 className="text-4xl font-bold text-white">Don&apos;t Want to Miss out?</h3>
              </div>

              <div className="place-self-center self-end w-full">
                <RegisterButton
                  label="Register Now"
                  buttonClass="btn btn-primary bg-stripes w-full py-2.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY PARTNER ═════════════════════════════════════════════ */}
      <section id="partners" className="app-container space-y-12 py-10">
        <RaisedPill label="Work With Us" />

        <aside className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-5xl font-bold">Why Partner With Us</h2>

          <LinkButton
            label="Become a Partner"
            buttonClass="btn btn-secondary bg-stripes py-2.5"
          />
        </aside>

        <aside className="grid md:grid-cols-4 border-box divide-y-2 sm:divide-y-0 sm:divide-x-2">
          {PartnerBenefits.map((benefit, index) => (
            <div key={index} className="bg-harlequin-400/5 px-6 py-8">
              <RaisedPill label={`${index + 1}`} backColour={benefit.style} />
              
              <h3 className="text-3xl font-bold">{benefit.title}</h3>
              <p className="mt-2">{benefit.text}</p>
            </div>
          ))}
        </aside>
      </section>

      {/* ══ SPONSORSHIP TIERS ═══════════════════════════════════════ */}
      <section className="bg-woodsmoke-50 px-6 py-10">
        <div className="app-container space-y-12">
          <RaisedPill label="Sponsorship Tiers" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-5xl font-bold">Sponsorship Tiers</h2>

            <LinkButton
              label="Become a Sponsor"
              buttonClass="btn btn-secondary bg-stripes py-2.5"
            />
          </div>

          <RaisedCard backColour="bg-harlequin-400">
            <div className="bg-secondary text-white p-8 grid sm:grid-cols-5 gap-10">
              {SponsorshipTiers.map(tier => (
                <div key={tier.name} className={`divide-y space-y-5`}>
                  <div className="pb-5 sm:pb-10">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <p className="font-medium">{tier.amount}</p>
                  </div>

                  <article className="">{tier.benefit}</article>
                </div>
              ))}

              <div className="sm:col-span-5 place-self-center mt-10">
                <LinkButton
                  linkHref="https://sandlip.notion.site/TechX-26-Sponsorship-Partnership-Proposal-3029cf3e56358083867debe70755e80b"
                  label="View Full Benefits"
                  buttonClass="btn btn-primary bg-stripes py-2.5 px-6"
                />
              </div>
            </div>
          </RaisedCard>
        </div>
      </section>

      {/* ══ GALLERY ═════════════════════════════════════════════════ */}
      <section id="gallery" className="px-6 py-10">
        <div className="app-container space-y-12">
          <RaisedPill label="Gallery" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h2 className="text-5xl font-bold">Built Different. Every Year.</h2>

            <LinkButton
              linkHref="https://drive.google.com/drive/folders/1OiT8oeKy7KRuaOHI2TQLEUQeTbNA4b5x"
              label="View All"
              buttonClass="btn btn-secondary bg-stripes py-2.5 px-4"
            />
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {gallery.map((src, i) => (
              <RaisedCard key={i} backColour="bg-black">
                <div key={i} className="aspect-square">
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </RaisedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section className="app-container grid grid-cols-1 sm:grid-cols-3 gap-10 py-20">
        <aside className="col-span-1 space-y-4">
          <RaisedPill label="Got Questions?" />

          <div className="space-y-8">
            <h2 className="text-6xl font-bold">FAQ</h2>

            <p className="">Still got questions? Feel free to reach out. We're happy to help.</p>
            
            <LinkButton
              label="Ask a questions"
              buttonClass="btn btn-secondary bg-stripes py-2.5 px-6"
              arrowClass="py-2.5 px-3.5"
            />
          </div>
        </aside>
          
        <aside className="col-span-2 divide-y divide-woodsmoke-300">
          {FAQs.map((faq, i) => (
            <div key={i} className="overflow-hidden">
              <button className="w-full flex items-center justify-between text-left py-6 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-lg font-medium">{faq.question}</span>
                
                <IoIosArrowDown className="text-xl" />
              </button>

              {open === i && (
                <div className="pb-4 pt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </aside>
      </section>

      {/* ══ JOIN US CTA ══════════════════════════════════════════════ */}
      <section className="bg-catalina-950/15 px-6 py-24 flex flex-col items-center gap-6 text-center">
        <h2 className="text-5xl font-extrabold">Join us in June.</h2>
        
        <p className="font-light">Secure your spot for Techx 2026 now.</p>
        
        <RegisterButton
          label="Register Now"
          buttonClass="btn btn-primary bg-stripes py-2.5 px-8"
        />
      </section>

    </main>
  )
}

'use client'
import ContactHero from './components/ContactHero'
import ContactInfo from './components/ContactInfo'
import ContactMap from './components/ContactMap'

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-[#f8f5f2] via-[#faf8f6] to-[#f0ebe6]">
      <ContactHero />
      <ContactInfo />
      <ContactMap />
    </div>
  )
}
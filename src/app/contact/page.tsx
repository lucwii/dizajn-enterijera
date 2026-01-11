'use client'
import ContactHero from './components/ContactHero'
import ContactGrid from './components/ContactGrid'
import WorkingHours from './components/WorkingHours'
import ContactMap from './components/ContactMap'
import TeamSection from './components/TeamSection'
import FAQSection from './components/FAQSection'
import ContactCTA from './components/ContactCTA'

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactGrid />
      <WorkingHours />
      <ContactMap />
      <TeamSection />
      <FAQSection />
      <ContactCTA />
    </div>
  )
}
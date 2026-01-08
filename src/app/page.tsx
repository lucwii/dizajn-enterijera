import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import Services from '@/components/sections/Services'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <Services />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

'use client'

import { useState, useRef } from 'react'
import ConsultationHero from './components/ConsultationHero'
import ServiceSelection from './components/ServiceSelection'
import FormSection from './components/FormSection'
import ProcessTimeline from './components/ProcessTimeline'
import TestimonialsSlider from './components/TestimonialsSlider'
import ConsultationFAQ from './components/ConsultationFAQ'
import ConsultationCTA from './components/ConsultationCTA'

export default function ZakazivanjePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const servicesSectionRef = useRef<HTMLDivElement>(null)

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handleChangeService = () => {
    // Scroll back to services section
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ConsultationHero />

      {/* Service Selection */}
      <div ref={servicesSectionRef}>
        <ServiceSelection
          selectedService={selectedService}
          onSelectService={handleServiceSelect}
        />
      </div>

      {/* Form Section */}
      <FormSection
        selectedService={selectedService}
        onChangeService={handleChangeService}
      />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* FAQ */}
      <ConsultationFAQ />

      {/* Final CTA */}
      <ConsultationCTA />
    </main>
  )
}

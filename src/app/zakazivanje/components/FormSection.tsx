'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Mail, Phone, ArrowLeft, Sparkles } from 'lucide-react'
import { FadeIn, ParallaxImage } from '@/components/animations'
import { SectionHeading } from '@/components/ui'
import Button from '@/components/ui/Button'
import { CONSULTATION_SERVICES } from '@/lib/constants'

interface FormSectionProps {
  selectedService: string | null
  onChangeService: () => void
}

export default function FormSection({ selectedService, onChangeService }: FormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const selectedServiceData = CONSULTATION_SERVICES.find(s => s.id === selectedService)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - just console.log for now
    console.log('Form submitted:', {
      service: selectedService,
      ...formData
    })
    alert('Forma je uspešno poslata! (Placeholder - logika za slanje emaila biće dodata)')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const inputClasses = (fieldName: string) => `
    w-full px-6 py-5 bg-white/60 backdrop-blur-sm
    border-2 transition-all duration-500 rounded-sm
    text-lg text-[#2d2d2d] placeholder:text-[#6b6b6b]/50
    outline-none resize-none
    ${focusedField === fieldName
      ? 'border-[#9b8573] bg-white shadow-lg shadow-[#9b8573]/10'
      : 'border-[#9b8573]/10 hover:border-[#9b8573]/20'
    }
  `

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#faf8f6] to-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden">
        <span className="text-[350px] font-light text-[#9b8573]/[0.03] select-none leading-none">
          02
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading="KORAK 2"
            heading="Opišite vaš projekat"
            className="mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Service Badge */}
              <AnimatePresence mode="wait">
                {selectedServiceData && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-between p-4 bg-[#9b8573]/5 rounded-sm border border-[#9b8573]/10"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-[#9b8573]" />
                      <span className="text-[#2d2d2d] font-medium">{selectedServiceData.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={onChangeService}
                      className="flex items-center gap-2 text-sm text-[#9b8573] hover:text-[#8b7355] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Promeni
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Input */}
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#9b8573]/40 pointer-events-none">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Vaše ime i prezime"
                  required
                  className={`${inputClasses('name')} pl-14`}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#9b8573]/40 pointer-events-none">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Email adresa"
                  required
                  className={`${inputClasses('email')} pl-14`}
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#9b8573]/40 pointer-events-none">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Broj telefona"
                  className={`${inputClasses('phone')} pl-14`}
                />
              </div>

              {/* Description Textarea */}
              <div className="relative">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('description')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Opišite nam vaš projekat, prostor i viziju..."
                  required
                  rows={6}
                  className={inputClasses('description')}
                  style={{ minHeight: '200px' }}
                />
                {/* Character counter */}
                <div className="absolute bottom-4 right-4 text-xs text-[#6b6b6b]/50">
                  {formData.description.length} karaktera
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  icon={<Send className="w-5 h-5" />}
                  disabled={!selectedService}
                >
                  Pošaljite zahtev
                </Button>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#6b6b6b]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Odgovaramo u roku od 24h
                  </span>
                  <span className="hidden sm:inline">|</span>
                  <span className="hidden sm:flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#9b8573] rounded-full" />
                    Besplatna konsultacija
                  </span>
                </div>
              </div>
            </form>
          </FadeIn>

          {/* Decorative Side */}
          <FadeIn delay={0.5} direction="left" className="hidden lg:block">
            <div className="relative">
              <ParallaxImage offset={60} className="h-[600px] rounded-sm overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&q=80&fit=crop"
                    alt="Interior design consultation"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/60 via-transparent to-transparent" />
                </div>
              </ParallaxImage>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-8 bottom-12 bg-white p-6 rounded-sm shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#9b8573]/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#9b8573]" />
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[#2d2d2d]">150+</p>
                    <p className="text-sm text-[#6b6b6b]">Zadovoljnih klijenata</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

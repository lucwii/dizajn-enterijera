'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { SectionHeading } from '@/components/ui'
import { HomeIcon, BuildingIcon, BrushIcon } from '@/components/icons'
import { CONSULTATION_SERVICES } from '@/lib/constants'

interface ServiceSelectionProps {
  selectedService: string | null
  onSelectService: (serviceId: string) => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: 'sm' | 'md' | 'lg' }>> = {
  home: HomeIcon,
  building: BuildingIcon,
  brush: BrushIcon
}

export default function ServiceSelection({ selectedService, onSelectService }: ServiceSelectionProps) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading="KORAK 1"
            heading="Izaberite uslugu"
            className="mb-16"
          />
        </FadeIn>

        {/* Service Cards */}
        <FadeIn stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CONSULTATION_SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || HomeIcon
              const isSelected = selectedService === service.id

              return (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectService(service.id)}
                  className={`
                    relative cursor-pointer p-8 lg:p-10 rounded-sm border-2 transition-all duration-500
                    ${isSelected
                      ? 'border-[#9b8573] bg-[#faf8f6] shadow-[0_0_40px_rgba(155,133,115,0.15)]'
                      : 'border-[#9b8573]/10 bg-white hover:border-[#9b8573]/30 hover:shadow-xl'
                    }
                  `}
                >
                  {/* Watermark Number */}
                  <div className="absolute top-4 right-4 text-7xl font-light text-[#9b8573]/10 select-none leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Selection Indicator */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                        className="absolute top-4 left-4 w-8 h-8 bg-[#9b8573] rounded-full flex items-center justify-center"
                      >
                        <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className="relative pt-8">
                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-sm flex items-center justify-center mb-6 transition-all duration-500
                      ${isSelected ? 'bg-[#9b8573] text-white' : 'bg-[#f8f5f2] text-[#9b8573]'}
                    `}>
                      <Icon size="lg" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d] mb-3">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6b6b6b] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className={`
                            text-xs px-3 py-1.5 rounded-sm transition-all duration-300
                            ${isSelected
                              ? 'bg-[#9b8573]/10 text-[#9b8573]'
                              : 'bg-[#f8f5f2] text-[#6b6b6b]'
                            }
                          `}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
        </FadeIn>

        {/* Selection Prompt */}
        <AnimatePresence>
          {!selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mt-12"
            >
              <p className="text-[#6b6b6b] text-lg">
                Kliknite na karticu da izaberete uslugu
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

'use client'

import { SERVICES } from '@/lib/constants'
import { SectionHeading, Card } from '../ui'
import { HomeIcon, BuildingIcon, BrushIcon } from '../icons'
import { FadeIn } from '../animations'
import { motion } from 'framer-motion'

const iconMap = {
  home: HomeIcon,
  building: BuildingIcon,
  brush: BrushIcon
}

export default function ServicesSection() {
  return (
    <section id="usluge" className="py-24 md:py-32 bg-gradient-to-b from-[#faf8f6] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading={SERVICES.preHeading}
            heading={SERVICES.heading}
            className="mb-16"
          />
        </FadeIn>

        <FadeIn stagger staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {SERVICES.items.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={service.number}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Card number={service.number} className="h-full">
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 inline-flex p-4 rounded-sm bg-gradient-to-br from-[#f0ebe6] to-[#e8dfd5] transition-transform duration-300 hover:rotate-6">
                        <Icon size="lg" className="text-[#9b8573]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d] mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#6b6b6b] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Clock, Phone, Users, FileText } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { SectionHeading } from '@/components/ui'
import { CONSULTATION_PROCESS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '01': Clock,
  '02': Phone,
  '03': Users,
  '04': FileText
}

export default function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading="ŠTA SE DEŠAVA POSLE"
            heading="Naš proces"
            className="mb-20"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#9b8573]/30 via-[#9b8573]/20 to-transparent" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {CONSULTATION_PROCESS.map((step, index) => {
              const Icon = iconMap[step.number] || Clock
              const isEven = index % 2 === 0

              return (
                <FadeIn
                  key={step.number}
                  delay={0.2 + index * 0.15}
                  direction={isEven ? 'right' : 'left'}
                >
                  <div className={`
                    relative md:grid md:grid-cols-2 md:gap-12 items-center
                    ${index !== CONSULTATION_PROCESS.length - 1 ? 'md:pb-20' : ''}
                  `}>
                    {/* Mobile Icon - positioned outside the card */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#9b8573] flex items-center justify-center text-white shadow-md shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="px-3 py-1 bg-[#9b8573]/10 text-[#9b8573] text-sm font-medium rounded-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Content - Alternating sides */}
                    <motion.div
                      className={`
                        relative p-8 rounded-sm border border-[#9b8573]/10 bg-gradient-to-br from-white to-[#faf8f6]
                        ${isEven ? 'md:order-1' : 'md:order-2'}
                      `}
                      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(155, 133, 115, 0.1)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Number badge - desktop only */}
                      <div className="hidden md:block absolute -top-4 left-6 px-4 py-1 bg-[#9b8573] text-white text-sm font-medium rounded-sm">
                        {step.number}
                      </div>

                      <div className="md:pt-4">
                        <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[#6b6b6b] leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#9b8573] font-medium">
                          <Clock className="w-4 h-4" />
                          {step.timeframe}
                        </div>
                      </div>
                    </motion.div>

                    {/* Icon - Center (Desktop) */}
                    <div className={`
                      hidden md:flex items-center justify-center
                      ${isEven ? 'md:order-2' : 'md:order-1'}
                    `}>
                      <div className="relative">
                        {/* Circle on timeline */}
                        <motion.div
                          className="w-16 h-16 rounded-full bg-[#9b8573] flex items-center justify-center text-white shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>

                        {/* Connecting line to content */}
                        <div className={`
                          absolute top-1/2 -translate-y-1/2 h-px w-12 bg-[#9b8573]/20
                          ${isEven ? 'left-full ml-2' : 'right-full mr-2'}
                        `} />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

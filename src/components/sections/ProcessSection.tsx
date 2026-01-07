'use client'

import { PROCESS } from '@/lib/constants'
import { SectionHeading } from '../ui'
import { FadeIn, FadeInChild } from '../animations'
import { motion } from 'framer-motion'

export default function ProcessSection() {
  return (
    <section id="proces" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading={PROCESS.preHeading}
            heading={PROCESS.heading}
            className="mb-16"
          />
        </FadeIn>

        <FadeIn stagger staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {PROCESS.steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative"
              >
                {/* Large watermark number */}
                <div className="absolute -top-4 left-0 text-8xl md:text-9xl font-light text-[#9b8573]/20 select-none leading-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative pt-20">
                  <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow - hide on last item and mobile */}
                {index < PROCESS.steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 -right-8 lg:-right-10 text-[#9b8573]/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

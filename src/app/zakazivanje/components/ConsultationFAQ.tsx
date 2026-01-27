'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { SectionHeading } from '@/components/ui'
import { CONSULTATION_FAQ } from '@/lib/constants'

export default function ConsultationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading="ČESTA PITANJA"
            heading="Imate pitanja?"
            className="mb-16"
          />
        </FadeIn>

        {/* FAQ Items */}
        <div className="space-y-4">
          {CONSULTATION_FAQ.map((faq, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <motion.div
                className={`
                  rounded-sm border overflow-hidden transition-all duration-500
                  ${openIndex === index
                    ? 'border-[#9b8573]/30 bg-gradient-to-br from-[#faf8f6] to-white shadow-lg'
                    : 'border-[#9b8573]/10 bg-white hover:border-[#9b8573]/20'
                  }
                `}
                whileHover={{ scale: openIndex === index ? 1 : 1.01 }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Number */}
                    <span className={`
                      text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                      ${openIndex === index
                        ? 'bg-[#9b8573] text-white'
                        : 'bg-[#9b8573]/10 text-[#9b8573]'
                      }
                    `}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Question text */}
                    <h3 className={`
                      text-lg md:text-xl font-light transition-colors duration-300 pr-4
                      ${openIndex === index ? 'text-[#9b8573]' : 'text-[#2d2d2d]'}
                    `}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`
                      w-5 h-5 transition-colors duration-300
                      ${openIndex === index ? 'text-[#9b8573]' : 'text-[#6b6b6b]'}
                    `} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                        <p className="text-[#6b6b6b] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

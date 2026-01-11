'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b8573] mb-4 font-medium">
              ČESTO POSTAVLJANA PITANJA
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2d2d2d] leading-tight">
              Odgovori na vaša pitanja
            </h2>
          </div>
        </FadeIn>

        {/* FAQ Items */}
        <div>
          {FAQ_ITEMS.map((faq, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <div
                className={`border-b border-[#9b8573]/10 py-8 ${
                  index === 0 ? 'border-t' : ''
                } ${openIndex === index ? 'bg-[#faf8f6]/30' : ''}`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group w-full flex items-center justify-between cursor-pointer text-left px-6 md:px-8 transition-colors duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d] group-hover:text-[#9b8573] transition-colors duration-300 pr-8 leading-tight">
                    {faq.question}
                  </h3>
                  <div
                    className={`shrink-0 w-6 h-6 text-[#9b8573] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
                  </div>
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
                      <div className="px-6 md:px-8 pt-6 pb-4">
                        <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

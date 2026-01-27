'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { SectionHeading } from '@/components/ui'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-[#f8f5f2] via-[#faf8f6] to-[#f0ebe6] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative Quote Marks */}
      <div className="absolute top-20 left-10 pointer-events-none">
        <Quote className="w-32 h-32 text-[#9b8573]/[0.07] rotate-180" />
      </div>
      <div className="absolute bottom-20 right-10 pointer-events-none">
        <Quote className="w-32 h-32 text-[#9b8573]/[0.07]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading="ISKUSTVA KLIJENATA"
            heading="Šta kažu o nama"
            className="mb-16"
          />
        </FadeIn>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center max-w-3xl mx-auto"
              >
                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2d2d2d] leading-relaxed mb-8">
                  &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <p className="text-xl font-medium text-[#9b8573]">
                    {TESTIMONIALS[currentIndex].author}
                  </p>
                  <p className="text-[#6b6b6b]">
                    {TESTIMONIALS[currentIndex].project}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={goToPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[#9b8573]/30 flex items-center justify-center text-[#9b8573] hover:bg-[#9b8573] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentIndex
                      ? 'bg-[#9b8573] w-8'
                      : 'bg-[#9b8573]/30 hover:bg-[#9b8573]/50'
                    }
                  `}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[#9b8573]/30 flex items-center justify-center text-[#9b8573] hover:bg-[#9b8573] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { WORKING_HOURS } from '@/lib/constants'

export default function WorkingHours() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-[#f8f5f2] via-[#faf8f6] to-[#f0ebe6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Decorative */}
          <FadeIn delay={0.2}>
            <div className="relative">
              {/* Watermark Clock Icon */}
              <div className="absolute -top-12 -left-12 text-[200px] text-[#9b8573]/5 pointer-events-none">
                <Clock strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9b8573] mb-6 font-medium">
                  Radno vreme
                </p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2d2d2d] leading-tight mb-6">
                  Uvek dostupni za{' '}
                  <span className="italic text-[#9b8573]">vas</span>
                </h2>
                <p className="text-xl text-[#6b6b6b] leading-relaxed max-w-xl">
                  Zakažite konsultaciju u vreme koje vama najviše odgovara.
                  Fleksibilni smo i prilagođavamo se vašim potrebama.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Schedule */}
          <FadeIn delay={0.4} stagger staggerDelay={0.15}>
            <div className="space-y-6">
              {WORKING_HOURS.map((schedule, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`group p-8 md:p-10 bg-white/60 backdrop-blur-sm border border-[#9b8573]/10 hover:border-[#9b8573]/20 hover:bg-white/80 transition-all duration-500 rounded-sm ${
                    !schedule.available ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-xl md:text-2xl font-light text-[#2d2d2d] mb-3">
                        {schedule.days}
                      </p>
                      <p className={`text-4xl md:text-5xl font-light ${
                        schedule.available ? 'text-[#9b8573]' : 'text-[#6b6b6b]'
                      } group-hover:scale-105 transition-transform duration-500 inline-block`}>
                        {schedule.hours}
                      </p>
                    </div>
                    {schedule.available && (
                      <div className="self-start md:self-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9b8573]/10 rounded-sm">
                          <div className="w-2 h-2 bg-[#9b8573] rounded-full animate-pulse" />
                          <span className="text-sm text-[#9b8573] font-medium">Dostupno</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

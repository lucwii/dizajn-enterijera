'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui'
import { ArrowIcon } from '@/components/icons'
import { FadeIn } from '@/components/animations'
import { CONSULTATION_HERO } from '@/lib/constants'

export default function ConsultationHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#9b8573]">
        {/* Watermark Number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[400px] font-light text-white/[0.03] select-none leading-none">
            01
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Text Content */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                {CONSULTATION_HERO.badge}
              </Badge>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[0.85] tracking-tighter">
                {CONSULTATION_HERO.title.line1}
                <br />
                <span className="italic text-white/90">{CONSULTATION_HERO.title.line2}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
                {CONSULTATION_HERO.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <motion.div
                className="flex items-center justify-center gap-3 text-white/60 cursor-pointer group"
                whileHover={{ y: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm uppercase tracking-widest">Izaberite uslugu ispod</span>
                <ArrowIcon direction="down" className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeIn delay={1.2}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            className="flex flex-col items-center gap-2 text-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowIcon direction="down" className="w-4 h-4" />
          </motion.div>
        </div>
      </FadeIn>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

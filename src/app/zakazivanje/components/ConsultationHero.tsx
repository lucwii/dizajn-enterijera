'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui'
import { ArrowIcon } from '@/components/icons'
import { FadeIn, ParallaxImage } from '@/components/animations'
import { CONSULTATION_HERO } from '@/lib/constants'

export default function ConsultationHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Gradient */}
        <div className="relative bg-gradient-to-br from-[#a38d7d] via-[#9b8573] to-[#8b7355]">
          {/* Decorative circles */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-black/5 blur-3xl" />

          {/* Watermark Number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[400px] font-light text-white/[0.03] select-none leading-none">
              01
            </span>
          </div>
        </div>

        {/* Right side - Image (hidden on mobile) */}
        <div className="hidden lg:block relative">
          <Image
            src={CONSULTATION_HERO.image}
            alt="Elegant interior"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b8573]/40 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
                {CONSULTATION_HERO.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <motion.div
                className="flex items-center gap-3 text-white/60 cursor-pointer group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm uppercase tracking-widest">Izaberite uslugu ispod</span>
                <ArrowIcon direction="down" className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.div>
            </FadeIn>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden relative">
            <FadeIn delay={0.6} direction="left">
              <ParallaxImage offset={50} className="h-[400px] rounded-sm overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src={CONSULTATION_HERO.image}
                    alt="Elegant interior design"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9b8573]/30 to-transparent" />
                </div>
              </ParallaxImage>
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

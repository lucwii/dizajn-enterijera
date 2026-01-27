'use client'

import Image from 'next/image'
import { HERO } from '@/lib/constants'
import { Badge } from '../ui'
import Button from '../ui/Button'
import { ArrowIcon } from '../icons'
import { FadeIn, ParallaxImage } from '../animations'

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f8f5f2] via-[#faf8f6] to-[#f0ebe6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:pr-8">
            <FadeIn delay={0.2}>
              <Badge>{HERO.badge}</Badge>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-[#2d2d2d] leading-[0.9] tracking-tighter">
                {HERO.title.line1}
                <br />
                <span className="italic text-[#9b8573]">{HERO.title.line2}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-[#6b6b6b] leading-relaxed max-w-xl">
                {HERO.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" icon={<ArrowIcon />} href="/zakazivanje">
                  {HERO.cta.primary}
                </Button>
                <Button size="lg" variant="secondary" href="/projects">
                  {HERO.cta.secondary}
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <FadeIn delay={0.6} direction="left">
              <ParallaxImage offset={100} className="h-[500px] md:h-[600px] lg:h-[700px] rounded-sm overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src={HERO.image}
                    alt="Elegant interior design"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f2]/30 to-transparent" />
                </div>
              </ParallaxImage>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeIn delay={1.2}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-[#9b8573] animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowIcon direction="down" className="w-4 h-4" />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

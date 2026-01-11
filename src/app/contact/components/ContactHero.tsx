'use client'
import { Badge } from '@/components/ui'
import { FadeIn } from '@/components/animations'

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#a38d7d] to-[#93795f] overflow-hidden">
      {/* Watermark Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[300px] font-light text-white/5 select-none">01</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          <FadeIn delay={0.2}>
            <Badge className="bg-white/20 text-white border-white/30">Kontakt</Badge>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tighter mt-8">
              Kontaktirajte
              <br />
              <span className="italic text-white/90">nas</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mt-8">
              Rado ćemo odgovoriti na sva vaša pitanja i pomoći vam da ostvarite prostor iz snova.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
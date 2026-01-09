'use client'
import { Badge } from '@/components/ui'
import { FadeIn } from '@/components/animations'

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          <FadeIn delay={0.2}>
            <Badge>Kontakt</Badge>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#2d2d2d] leading-[0.9] tracking-tighter mt-8">
              Kontaktirajte
              <br />
              <span className="italic text-[#9b8573]">nas</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-[#6b6b6b] leading-relaxed max-w-xl mt-8">
              Rado ćemo odgovoriti na sva vaša pitanja i pomoći vam da ostvarite prostor iz snova.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
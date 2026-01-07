import Image from 'next/image'
import { ABOUT } from '@/lib/constants'
import { SectionHeading } from '../ui'
import FadeIn from '../animations/FadeIn'

export default function AboutSection() {
  return (
    <section id="o-nama" className="py-24 md:py-32 bg-gradient-to-b from-white to-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <SectionHeading
                preHeading={ABOUT.preHeading}
                heading={ABOUT.heading}
                align="left"
                className="mb-8"
              />
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6 text-lg leading-relaxed text-[#6b6b6b]">
                {ABOUT.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <blockquote className="mt-10 pl-6 border-l-2 border-[#9b8573]">
                <p className="text-2xl md:text-3xl font-light italic text-[#9b8573] leading-relaxed">
                  {ABOUT.quote}
                </p>
              </blockquote>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.4} direction="left">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={ABOUT.image}
                  alt="Interior design workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

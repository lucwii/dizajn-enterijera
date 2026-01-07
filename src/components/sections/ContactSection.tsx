import { CONTACT } from '@/lib/constants'
import Button from '../ui/Button'
import { ArrowIcon } from '../icons'
import FadeIn from '../animations/FadeIn'

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#2d2d2d] via-[#3d3d3d] to-[#2d2d2d]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            {CONTACT.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {CONTACT.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              variant="primary"
              icon={<ArrowIcon />}
              className="bg-[#9b8573] hover:bg-[#8b7355]"
            >
              {CONTACT.cta}
            </Button>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/70">
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-[#9b8573] transition-colors"
              >
                {CONTACT.email}
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${CONTACT.phone}`}
                className="hover:text-[#9b8573] transition-colors"
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import { CONTACT } from '@/lib/constants'

export default function ConsultationCTA() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, '')}`
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#9b8573] via-[#a38d7d] to-[#8b7355] overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[400px] font-light text-white/[0.03] select-none leading-none">
          07
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Pre-heading */}
          <FadeIn delay={0.2}>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4 font-medium">
              ALTERNATIVNI KONTAKT
            </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.3}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Imate pitanja?
            </h2>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.4}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Ako preferirate direktan kontakt, tu smo za vas. Javite nam se bilo kojim kanalom.
            </p>
          </FadeIn>

          {/* Contact Methods */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    flex items-center gap-4 px-8 py-5 rounded-sm
                    bg-white/10 backdrop-blur-sm border border-white/20
                    hover:bg-white/20 transition-all duration-300
                    group w-full sm:w-auto
                  "
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
                      {method.label}
                    </p>
                    <p className="text-lg text-white font-medium">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Social proof */}
          <FadeIn delay={0.6}>
            <div className="flex items-center justify-center gap-2 text-white/60">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">
                Prosečno vreme odgovora: manje od 24 sata
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

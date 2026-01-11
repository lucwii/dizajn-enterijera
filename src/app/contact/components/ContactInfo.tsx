'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { FadeIn } from '@/components/animations'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@enterijerdizajn.com',
    href: 'mailto:info@enterijerdizajn.com',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+381 12 345 6789',
    href: 'tel:+381123456789',
  },
  {
    icon: MapPin,
    label: 'Lokacija',
    value: 'Petrovac na Mlavi, Srbija',
    href: null,
  },
  {
    icon: Clock,
    label: 'Radno vreme',
    value: 'Pon - Pet: 9:00 - 17:00',
    subValue: 'Sub: Po dogovoru',
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Contact Items */}
      <div className="space-y-8">
        {contactItems.map((item, index) => {
          const Icon = item.icon
          const ItemWrapper = item.href ? 'a' : 'div'

          return (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ItemWrapper
                  href={item.href || undefined}
                  className="group flex items-start gap-6 p-6 bg-white/40 border border-[#9b8573]/10 hover:border-[#9b8573]/20 hover:bg-white/60 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-[#9b8573]/5 border border-[#9b8573]/10 group-hover:bg-[#9b8573]/10 group-hover:border-[#9b8573]/20 transition-all duration-300">
                    <Icon
                      className="w-6 h-6 text-[#9b8573]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9b8573]/60 mb-2 font-medium">
                      {item.label}
                    </p>
                    <p className="text-lg md:text-xl font-light text-[#2d2d2d] group-hover:text-[#9b8573] transition-colors duration-300 leading-relaxed">
                      {item.value}
                    </p>
                    {item.subValue && (
                      <p className="text-base font-light text-[#6b6b6b] mt-1.5 leading-relaxed">
                        {item.subValue}
                      </p>
                    )}
                  </div>
                </ItemWrapper>
              </motion.div>
            </FadeIn>
          )
        })}
      </div>

      {/* Social Media */}
      <FadeIn delay={0.7}>
        <div className="pt-8 border-t border-[#9b8573]/10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9b8573]/60 font-medium mb-5">
            Pratite nas
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3.5 bg-white/40 border border-[#9b8573]/10 hover:border-[#9b8573]/30 hover:bg-white/60 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-[#9b8573]" strokeWidth={1.5} />
              <span className="text-sm font-light text-[#2d2d2d] group-hover:text-[#9b8573] transition-colors">
                Instagram
              </span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3.5 bg-white/40 border border-[#9b8573]/10 hover:border-[#9b8573]/30 hover:bg-white/60 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-[#9b8573]" strokeWidth={1.5} />
              <span className="text-sm font-light text-[#2d2d2d] group-hover:text-[#9b8573] transition-colors">
                Facebook
              </span>
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
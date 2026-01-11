'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'
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
    value: 'Petrovac na Mlavi',
    subValue: 'Srbija',
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@enterijerdizajn',
    href: 'https://instagram.com/enterijerdizajn',
  },
]

export default function ContactGrid() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn stagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              const ItemWrapper = item.href ? 'a' : 'div'

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <ItemWrapper
                    href={item.href || undefined}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block h-full p-10 md:p-12 bg-gradient-to-br from-[#faf8f6] to-white border-2 border-[#9b8573]/10 hover:border-[#9b8573]/30 hover:shadow-2xl transition-all duration-500 rounded-sm"
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9b8573]/10 border-2 border-[#9b8573]/20 group-hover:rotate-6 transition-all duration-500">
                        <Icon
                          className="w-7 h-7 text-[#9b8573]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#9b8573]/70 mb-4 font-medium">
                        {item.label}
                      </p>
                      <p className="text-2xl md:text-3xl font-light text-[#2d2d2d] group-hover:text-[#9b8573] transition-colors duration-500 leading-tight">
                        {item.value}
                      </p>
                      {item.subValue && (
                        <p className="text-lg font-light text-[#6b6b6b] mt-2 leading-relaxed">
                          {item.subValue}
                        </p>
                      )}
                    </div>
                  </ItemWrapper>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { TEAM_MEMBERS } from '@/lib/constants'

export default function TeamSection() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white to-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b8573] mb-4 font-medium">
              NAŠ TIM
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2d2d2d] leading-tight">
              Upoznajte naš tim
            </h2>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <FadeIn stagger staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border-2 border-[#9b8573]/10 shadow-xl group-hover:-translate-y-3 transition-transform duration-500 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9b8573]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#9b8573] mb-3 font-medium">
                    {member.role}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-light text-[#2d2d2d] mb-4 leading-tight group-hover:text-[#9b8573] transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-base text-[#6b6b6b] leading-relaxed mb-4">
                    {member.description}
                  </p>
                  {member.specialty && (
                    <p className="text-lg italic text-[#9b8573]/80 pl-4 border-l-2 border-[#9b8573]/30">
                      {member.specialty}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

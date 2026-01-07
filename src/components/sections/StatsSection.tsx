'use client'

import { STATS } from '@/lib/constants'
import { CountUp } from '../animations'
import { FadeIn, FadeInChild } from '../animations'
import { motion } from 'framer-motion'

export default function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn stagger staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-light text-[#9b8573] mb-4">
                  <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                </div>
                <p className="text-sm uppercase tracking-widest text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { Button } from '@/components/ui' 

export default function ContactCTA() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-br from-[#a38d7d] to-[#93795f] overflow-hidden">
      {/* Watermark Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[300px] font-light text-white/5 select-none">07</span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Spremni da započnemo?
            </h2>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Zakažite besplatnu konsultaciju i saznajte kako možemo transformisati vaš prostor.
            </p>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#9b8573] hover:bg-[#f0ebe6] border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                href="/zakazivanje"
              >
                Zakažite konsultaciju
              </Button>
            <a href="tel:+381123456789">
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300"
              >
                Pozovite nas
              </Button>
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/ui'
import FadeIn from '@/components/animations/FadeIn'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/constants'


export default function ProjectsSection() {
  return (
    <section id="projekti" className="py-24 md:py-32 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <FadeIn delay={0.2}>
          <SectionHeading
            preHeading="Portfolio"
            heading="Naši Glavni Projekti"
            className="mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {PROJECTS.map((project, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>

                {/* Text */}
                <div className="mt-6">
                  <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d]">
                    {project.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-[#9b8573] mt-2">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Calendar, User } from 'lucide-react'
import { Project } from '@/app/types/projects'
import { ProjectCarousel } from './carousel/ProjectCarousel'
import { CarouselImage } from './carousel/types'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20
  }
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  const carouselImages: CarouselImage[] = project.gallery
    ? project.gallery.map((url) => ({
        url,
        alt: project.title
      }))
    : project.cover_image
    ? [{ url: project.cover_image, alt: project.title }]
    : []

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-7xl h-[85vh] bg-white rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#9b8573] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </motion.button>

            <div className="h-full flex flex-col md:flex-row">
              {/* Carousel Section - Left Side */}
              {carouselImages.length > 0 && (
                <div className="w-full md:w-[60%] h-[40vh] md:h-full bg-gray-50 flex items-center justify-center p-4 md:p-8">
                  <div className="w-full h-full">
                    <ProjectCarousel images={carouselImages} />
                  </div>
                </div>
              )}

              {/* Info Section - Right Side */}
              <div className={`w-full ${carouselImages.length > 0 ? 'md:w-[40%]' : 'md:w-full'} h-[45vh] md:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 p-6 md:p-8 lg:p-10`}>
                <div className="space-y-6 h-full flex flex-col">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-[#9b8573] mb-2">
                      {project.category}
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2d2d2d]">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-[#6b6b6b]">
                    {project.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#9b8573]" />
                        <span>{project.location}</span>
                      </div>
                    )}
                    {project.year && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#9b8573]" />
                        <span>{project.year}</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#9b8573]" />
                        <span>{project.client}</span>
                      </div>
                    )}
                  </div>

                  {project.description && (
                    <div className="prose prose-base max-w-none flex-1">
                      <p className="text-[#6b6b6b] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

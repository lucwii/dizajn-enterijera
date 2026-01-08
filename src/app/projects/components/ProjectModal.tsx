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
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="sticky top-4 right-4 z-10 ml-auto mr-4 mt-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#9b8573] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </motion.button>

            <div className="p-6 md:p-8 lg:p-12 pt-0">
              {carouselImages.length > 0 && (
                <div className="mb-8">
                  <ProjectCarousel images={carouselImages} />
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-[#9b8573] mb-2">
                    {project.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2d2d2d]">
                    {project.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-[#6b6b6b]">
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
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[#6b6b6b] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

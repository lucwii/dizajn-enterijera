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
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 60,
    rotateX: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
      opacity: { duration: 0.3 }
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 40,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const
    }
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
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-[#9b8573]/85 backdrop-blur-2xl"
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(155, 133, 115, 0.85)'
            }}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-7xl h-[85vh] bg-gradient-to-br from-white via-white to-gray-50/30 rounded-2xl overflow-hidden shadow-2xl"
            style={{ perspective: '1000px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ delay: 0.3, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.85 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-3 bg-white/95 backdrop-blur-md rounded-full shadow-xl hover:bg-[#9b8573] hover:text-white transition-all duration-300 border border-gray-100 hover:border-[#9b8573]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </motion.button>

            <div className="h-full flex flex-col md:flex-row">
              {/* Carousel Section - Left Side */}
              {carouselImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full md:w-[60%] h-[40vh] md:h-full bg-gradient-to-br from-gray-50 to-gray-100/50 flex items-center justify-center p-6 md:p-10"
                >
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-inner">
                    <ProjectCarousel images={carouselImages} />
                  </div>
                </motion.div>
              )}

              {/* Info Section - Right Side */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className={`w-full ${carouselImages.length > 0 ? 'md:w-[40%]' : 'md:w-full'} h-[45vh] md:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#9b8573]/30 hover:scrollbar-thumb-[#9b8573]/50 scrollbar-track-transparent p-8 md:p-10 lg:p-12`}
              >
                <div className="space-y-8 h-full flex flex-col">
                  <motion.div variants={itemVariants}>
                    <motion.p
                      className="text-xs uppercase tracking-[0.25em] text-[#9b8573] mb-3 font-medium"
                    >
                      {project.category}
                    </motion.p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2d2d2d] leading-tight">
                      {project.title}
                    </h2>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="h-px bg-gradient-to-r from-[#9b8573]/20 via-[#9b8573]/50 to-transparent"
                  />

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-6 text-sm text-[#6b6b6b]"
                  >
                    {project.location && (
                      <div className="flex items-center gap-2 group">
                        <div className="p-2 bg-[#9b8573]/10 rounded-lg group-hover:bg-[#9b8573]/20 transition-colors">
                          <MapPin className="w-4 h-4 text-[#9b8573]" />
                        </div>
                        <span className="font-light">{project.location}</span>
                      </div>
                    )}
                    {project.year && (
                      <div className="flex items-center gap-2 group">
                        <div className="p-2 bg-[#9b8573]/10 rounded-lg group-hover:bg-[#9b8573]/20 transition-colors">
                          <Calendar className="w-4 h-4 text-[#9b8573]" />
                        </div>
                        <span className="font-light">{project.year}</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex items-center gap-2 group">
                        <div className="p-2 bg-[#9b8573]/10 rounded-lg group-hover:bg-[#9b8573]/20 transition-colors">
                          <User className="w-4 h-4 text-[#9b8573]" />
                        </div>
                        <span className="font-light">{project.client}</span>
                      </div>
                    )}
                  </motion.div>

                  {project.description && (
                    <motion.div
                      variants={itemVariants}
                      className="prose prose-lg max-w-none flex-1"
                    >
                      <p className="text-[#6b6b6b] leading-relaxed text-base md:text-lg font-light">
                        {project.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

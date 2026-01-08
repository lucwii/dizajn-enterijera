'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCarousel } from './useCarousel'
import { slideVariants, thumbnailVariants, buttonHoverVariants } from './carousel.animations'
import { CarouselImage } from './types'

interface ProjectCarouselProps {
  images: CarouselImage[]
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const {
    currentIndex,
    direction,
    goToNext,
    goToPrevious,
    goToIndex,
    canGoNext,
    canGoPrevious
  } = useCarousel(images.length)

  if (images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-sm flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {canGoPrevious && (
          <motion.button
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.button>
        )}

        {canGoNext && (
          <motion.button
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.button>
        )}

        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
          <span className="text-white text-sm font-light">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <motion.button
              key={index}
              variants={thumbnailVariants}
              initial="inactive"
              animate={index === currentIndex ? 'active' : 'inactive'}
              whileHover="hover"
              onClick={() => goToIndex(index)}
              className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden"
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 border-2 border-[#9b8573] rounded-sm" />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}

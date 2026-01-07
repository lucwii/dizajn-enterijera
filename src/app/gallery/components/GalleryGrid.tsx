'use client'

import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import { GalleryItem } from './GalleryItem'
import { GalleryImage } from '@/app/types/gallery'

const breakpointColumns = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Format images za lightbox
  const slides = images.map(img => ({
    src: img.image_url,
    alt: img.title,
    title: img.title,
    description: img.description || ''
  }))

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {images.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </Masonry>
      </motion.div>

      {/* Lightbox sa naprednim features */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Zoom, Thumbnails, Captions]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: 'bottom',
          width: 120,
          height: 80,
          border: 2,
          borderRadius: 8,
          padding: 0,
          gap: 16,
          showToggle: true,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'center',
          descriptionMaxLines: 3,
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
          thumbnailsContainer: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: '16px',
          },
          thumbnail: {
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
          },
          captionsTitle: {
            fontSize: '20px',
            fontWeight: '300',
            color: 'white',
            marginBottom: '8px',
          },
          captionsDescription: {
            fontSize: '14px',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.8)',
          },
        }}
        animation={{ fade: 300, swipe: 250 }}
        carousel={{ finite: false }}
      />
    </>
  )
}

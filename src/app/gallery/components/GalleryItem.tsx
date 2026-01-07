'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GalleryImage } from '@/app/types/gallery'
import { useState } from 'react'

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

interface GalleryItemProps {
  image: GalleryImage
  onClick: () => void
}

export function GalleryItem({ image, onClick }: GalleryItemProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      variants={item}
      className="mb-4 group cursor-pointer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300">
        {/* Slika */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={image.image_url}
            alt={image.title}
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-2xl"
            onLoad={() => setIsLoaded(true)}
            sizes="(max-width: 500px) 100vw, (max-width: 768px) 50vw, (max-width: 1100px) 33vw, 25vw"
          />
        </motion.div>

        {/* Hover overlay sa naslovom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/90 via-[#2d2d2d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 rounded-2xl">
          <h3 className="text-white font-light text-lg md:text-xl tracking-wide">
            {image.title}
          </h3>
          {image.description && (
            <p className="text-white/80 text-sm mt-1 line-clamp-2">
              {image.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

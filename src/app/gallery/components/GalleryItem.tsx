'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GalleryImage } from '@/app/types/gallery'
import { useState } from 'react'
import { Search } from 'lucide-react'

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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-2xl transition-all duration-300 ring-0 group-hover:ring-2 group-hover:ring-[#9b8573]/30">
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
            className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
            onLoad={() => setIsLoaded(true)}
            sizes="(max-width: 500px) 100vw, (max-width: 768px) 50vw, (max-width: 1100px) 33vw, 25vw"
          />
        </motion.div>

        {/* Ikonica lupe u gornjem desnom uglu */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
          <Search className="w-5 h-5 text-[#9b8573]" />
        </div>

        {/* Hover overlay sa naslovom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/95 via-[#2d2d2d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 rounded-2xl">
          <h3 className="text-white font-light text-lg md:text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {image.title}
          </h3>
          {image.description && (
            <p className="text-white/80 text-sm mt-1 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {image.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

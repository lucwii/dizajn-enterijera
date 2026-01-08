'use client'

import { GalleryGrid } from './GalleryGrid'
import { GalleryImage } from '@/app/types/gallery'
import FadeIn from '@/components/animations/FadeIn'

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="mb-16 text-center">
            <p className="text-sm tracking-[0.2em] text-[#9b8573] mb-4 font-light">
              GALERIJA
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d2d2d] tracking-tight">
              Naša Galerija
            </h2>
          </div>
        </FadeIn>

        {images.length > 0 ? (
          <GalleryGrid images={images} />
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-[#999999]">
              Trenutno nema dostupnih slika u galeriji.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

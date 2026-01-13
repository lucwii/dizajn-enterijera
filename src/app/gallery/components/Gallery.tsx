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
          <div className="mb-16 text-center relative">
            <p className="text-sm tracking-[0.2em] text-[#9b8573] mb-4 font-light">
              GALERIJA
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d2d2d] tracking-tight mb-6">
              Naša Galerija
            </h2>

            {/* Dekorativna linija */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#9b8573]"></div>
              <div className="w-2 h-2 rounded-full bg-[#9b8573] animate-pulse"></div>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#9b8573]"></div>
            </div>

            {/* Brojač projekata */}
            {images.length > 0 && (
              <p className="text-sm text-[#999999] font-light">
                <span className="text-[#9b8573] font-normal">{images.length}</span> {images.length === 1 ? 'projekat' : images.length < 5 ? 'projekta' : 'projekata'}
              </p>
            )}
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

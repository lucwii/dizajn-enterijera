import { getGalleryImages } from '../services/gallery.service'
import { Gallery } from './components/Gallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerija - Dizajn Enterijera',
  description: 'Pogledajte našu galeriju projekata dizajna enterijera. Inspiracija za vaš dom.',
}

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f5f2] via-[#faf8f6] to-[#f0ebe6] pt-20">
      <Gallery images={images} />
    </main>
  )
}

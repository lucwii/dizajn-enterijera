'use client'
import { FadeIn } from '@/components/animations'

export default function ContactMap() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91923.08413636583!2d20.978939349999997!3d44.368301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750988e7b5d7d4d%3A0x8b5a5d7d5d7d5d7d!2sPetrovac%20na%20Mlavi!5e0!3m2!1sen!2srs!4v1709876543210!5m2!1sen!2srs"

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0.5}>
          <div className="relative h-full min-h-[350px] max-h-[400px] overflow-hidden rounded-sm border border-[#9b8573]/10 shadow-2xl">
            {/* Map */}
            <iframe
              src={mapSrc}
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.05]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Petrovac na Mlavi Location"
            />

            {/* Subtle brand overlay */}
            <div className="absolute inset-0 bg-[#9b8573]/[0.02] pointer-events-none" />

            {/* Location Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm border border-[#9b8573]/10 p-6 shadow-lg max-w-xs rounded-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9b8573]/60 mb-3 font-medium">
                Naša lokacija
              </p>
              <p className="text-xl md:text-2xl font-light text-[#2d2d2d] leading-tight mb-1">
                Petrovac na Mlavi
              </p>
              <p className="text-lg text-[#6b6b6b]">Srbija</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
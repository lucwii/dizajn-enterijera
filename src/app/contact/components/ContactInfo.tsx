'use client'
import { FadeIn } from '@/components/animations'

export default function ContactInfo() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Email */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#9b8573]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b8573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#9b8573] mb-2">Email</p>
                <a 
                  href="mailto:info@enterijerdizajn.com" 
                  className="text-xl text-[#2d2d2d] hover:text-[#9b8573] transition-colors"
                >
                  info@enterijerdizajn.com
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Telefon */}
          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#9b8573]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b8573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#9b8573] mb-2">Telefon</p>
                <a 
                  href="tel:+381123456789" 
                  className="text-xl text-[#2d2d2d] hover:text-[#9b8573] transition-colors"
                >
                  +381 12 345 6789
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Adresa */}
          <FadeIn delay={0.6}>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#9b8573]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b8573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#9b8573] mb-2">Adresa</p>
                <p className="text-xl text-[#2d2d2d]">
                  Petrovac na Mlavi, Srbija
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
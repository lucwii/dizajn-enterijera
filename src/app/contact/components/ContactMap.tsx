'use client'
import { FadeIn } from '@/components/animations'

export default function ContactMap() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="rounded-sm overflow-hidden shadow-2xl h-[500px] border border-[#9b8573]/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23040.447089842936!2d21.403240!3d44.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750878c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sPetrovac%20na%20Mlavi!5e0!3m2!1sen!2srs!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
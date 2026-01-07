'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxImageProps {
  children: ReactNode
  offset?: number
  className?: string
}

export default function ParallaxImage({ children, offset = 50, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ''}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'

interface MenuIconProps {
  isOpen: boolean
  className?: string
}

export default function MenuIcon({ isOpen, className }: MenuIconProps) {
  return (
    <svg
      className={`w-6 h-6 ${className || ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <motion.line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <motion.line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        animate={{
          opacity: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </svg>
  )
}

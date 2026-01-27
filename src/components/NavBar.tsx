'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'
import Button from './ui/Button'
import { MenuIcon, ArrowIcon } from './icons'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Animation variants - Slide from right
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

  const panelVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
        when: "afterChildren" as const
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  const decorativeLineVariants = {
    closed: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3
      }
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-light text-[#2d2d2d] tracking-tight hover:text-[#9b8573] transition-colors"
            >
              Dizajn Enterijera
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#6b6b6b] hover:text-[#9b8573] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" icon={<ArrowIcon />} href="/zakazivanje">
                Zakažite konsultaciju
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-50 p-2 text-[#2d2d2d] hover:text-[#9b8573] transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from Right */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              className="fixed inset-0 z-40 lg:hidden bg-black/50"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleMobileMenu}
            />

            {/* Sliding Panel - Floating */}
            <motion.div
              className="fixed top-4 right-4 bottom-4 z-40 lg:hidden w-[calc(100%-2rem)] max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Decorative vertical line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#9b8573]/30 to-transparent"
                variants={decorativeLineVariants}
                style={{ originY: 0 }}
              />

              {/* Menu Content */}
              <div className="h-full flex flex-col pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center space-y-1">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      className="overflow-hidden"
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className="group relative flex items-center py-5"
                      >
                        {/* Number indicator */}
                        <span className="text-xs text-[#9b8573]/60 font-light tracking-wider mr-4 min-w-[24px]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Link text */}
                        <span className="text-3xl sm:text-4xl font-light text-[#2d2d2d] tracking-tight group-hover:text-[#9b8573] transition-all duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>

                        {/* Arrow on hover */}
                        <span className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowIcon className="w-6 h-6 text-[#9b8573]" />
                        </span>
                      </Link>

                      {/* Separator line */}
                      {index < NAV_ITEMS.length - 1 && (
                        <motion.div
                          className="h-px bg-gradient-to-r from-[#2d2d2d]/10 to-transparent ml-10"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.05, duration: 0.6 }}
                          style={{ originX: 0 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div variants={itemVariants} className="mt-6">
                  <Link href="/zakazivanje" onClick={toggleMobileMenu}>
                    <Button
                      size="md"
                      className="w-full justify-center text-base py-4"
                      icon={<ArrowIcon />}
                    >
                      Zakažite konsultaciju
                    </Button>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={itemVariants}
                  className="mt-6 pt-6 border-t border-[#2d2d2d]/10"
                >
                  <p className="text-xs uppercase tracking-widest text-[#9b8573] font-medium mb-3">
                    Kontakt
                  </p>
                  <a
                    href="mailto:info@dizajn-enterijera.com"
                    className="block text-base text-[#6b6b6b] hover:text-[#9b8573] transition-colors mb-2"
                  >
                    info@dizajn-enterijera.com
                  </a>
                  <a
                    href="tel:+381601234567"
                    className="block text-base text-[#6b6b6b] hover:text-[#9b8573] transition-colors"
                  >
                    +381 60 123 4567
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

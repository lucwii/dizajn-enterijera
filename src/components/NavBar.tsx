'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'
import { ArrowIcon } from './icons'

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

  // Smooth easing curves
  const smoothEase = [0.32, 0.72, 0, 1] as const
  const smoothEaseIn = [0.4, 0, 1, 1] as const

  // Animation variants
  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: {
        duration: 0.5,
        ease: smoothEaseIn as unknown as [number, number, number, number],
        when: "afterChildren" as const
      }
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: {
        duration: 0.7,
        ease: smoothEase as unknown as [number, number, number, number],
        when: "beforeChildren" as const,
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: smoothEaseIn as unknown as [number, number, number, number]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: smoothEase as unknown as [number, number, number, number]
      }
    }
  }

  const lineVariants = {
    closed: { scaleX: 0 },
    open: (i: number) => ({
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: smoothEase as unknown as [number, number, number, number],
        delay: 0.3 + i * 0.05
      }
    })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#faf8f6]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(155,133,115,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
                isMobileMenuOpen ? 'text-[#faf8f6]' : 'text-[#2d2d2d] hover:text-[#9b8573]'
              }`}
              style={{ zIndex: 60, position: 'relative' }}
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
              <Link
                href="/zakazivanje"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9b8573] text-white text-sm font-medium rounded-full hover:bg-[#8b7355] transition-all duration-300 hover:shadow-lg hover:shadow-[#9b8573]/20"
              >
                Zakažite konsultaciju
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4 flex flex-col justify-between">
                <motion.span
                  className={`block h-[1.5px] rounded-full origin-center transition-colors duration-300 ${
                    isMobileMenuOpen ? 'bg-[#faf8f6]' : 'bg-[#2d2d2d]'
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                    width: isMobileMenuOpen ? 24 : 24
                  }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                />
                <motion.span
                  className={`block h-[1.5px] rounded-full transition-colors duration-300 ${
                    isMobileMenuOpen ? 'bg-[#faf8f6]' : 'bg-[#2d2d2d]'
                  }`}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 10 : 0
                  }}
                  transition={{ duration: 0.2, ease: smoothEase }}
                />
                <motion.span
                  className={`block h-[1.5px] rounded-full origin-center transition-colors duration-300 ${
                    isMobileMenuOpen ? 'bg-[#faf8f6]' : 'bg-[#2d2d2d]'
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                    width: isMobileMenuOpen ? 24 : 16
                  }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-gradient-to-br from-[#2d2d2d] via-[#3d3d3d] to-[#2d2d2d]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #faf8f6 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />

            {/* Accent gradient */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-[#9b8573]/10 to-transparent" />

            {/* Menu Content */}
            <div className="h-full flex flex-col justify-center px-8 sm:px-12">
              {/* Navigation Links */}
              <nav className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className="group relative flex items-center py-3 sm:py-4"
                    >
                      {/* Number indicator */}
                      <span className="text-[10px] sm:text-xs text-[#9b8573] font-light tracking-[0.2em] mr-4 sm:mr-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Link text */}
                      <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[#faf8f6] tracking-tight group-hover:text-[#9b8573] transition-all duration-300">
                        {item.label}
                      </span>

                      {/* Arrow on hover */}
                      <motion.span
                        className="ml-auto text-[#9b8573]"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowIcon className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.span>
                    </Link>

                    {/* Separator line */}
                    {index < NAV_ITEMS.length - 1 && (
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#faf8f6]/10 via-[#9b8573]/20 to-transparent"
                        variants={lineVariants}
                        custom={index}
                        style={{ originX: 0 }}
                      />
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-10 sm:mt-12">
                <Link
                  href="/zakazivanje"
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#9b8573] text-[#faf8f6] text-sm sm:text-base font-medium rounded-full hover:bg-[#8b7355] transition-all duration-300 hover:shadow-xl hover:shadow-[#9b8573]/30"
                >
                  Zakažite konsultaciju
                  <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="mt-10 sm:mt-12 pt-8 border-t border-[#faf8f6]/10"
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#9b8573] font-medium mb-4">
                  Kontakt
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:info@dizajn-enterijera.com"
                    className="block text-sm sm:text-base text-[#faf8f6]/70 hover:text-[#9b8573] transition-colors duration-300"
                  >
                    info@dizajn-enterijera.com
                  </a>
                  <a
                    href="tel:+381601234567"
                    className="block text-sm sm:text-base text-[#faf8f6]/70 hover:text-[#9b8573] transition-colors duration-300"
                  >
                    +381 60 123 4567
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute bottom-8 right-8 w-24 h-24 border border-[#9b8573]/20 rounded-full" />
            <div className="absolute bottom-12 right-12 w-16 h-16 border border-[#9b8573]/10 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

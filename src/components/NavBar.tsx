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

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
        when: "afterChildren" as const,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0, 0, 0.2, 1] as const
      }
    }
  }

  const lineVariants = {
    closed: {
      scaleX: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1] as const
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
              <Button size="sm" icon={<ArrowIcon />}>
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

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 backdrop-blur-xl bg-[#f8f5f2]/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={toggleMobileMenu}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center px-8 sm:px-12">
              {/* Decorative line */}
              <motion.div
                className="absolute top-1/4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#9b8573]/20 to-transparent"
                variants={lineVariants}
                style={{ originX: 0 }}
              />

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
                      className="group flex items-center py-3"
                    >
                      <span className="text-xs text-[#9b8573] font-light mr-4 opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-3xl sm:text-4xl font-light text-[#2d2d2d] tracking-tight group-hover:text-[#9b8573] transition-colors duration-300">
                        {item.label}
                      </span>
                      <motion.span
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowIcon className="w-5 h-5 text-[#9b8573]" />
                      </motion.span>
                    </Link>
                    {index < NAV_ITEMS.length - 1 && (
                      <motion.div
                        className="h-px bg-[#2d2d2d]/5 ml-10"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="mt-12"
              >
                <Button
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<ArrowIcon />}
                  onClick={toggleMobileMenu}
                >
                  Zakažite konsultaciju
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="mt-16 space-y-2"
              >
                <p className="text-sm text-[#6b6b6b] font-light">
                  info@dizajn-enterijera.com
                </p>
                <p className="text-sm text-[#6b6b6b] font-light">
                  +381 60 123 4567
                </p>
              </motion.div>

              {/* Decorative line bottom */}
              <motion.div
                className="absolute bottom-1/4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#9b8573]/20 to-transparent"
                variants={lineVariants}
                style={{ originX: 1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

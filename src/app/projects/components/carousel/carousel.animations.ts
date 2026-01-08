import { Variants } from 'framer-motion'

export const slideVariants: Variants = {
  enter: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? -1000 : 1000,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  })
}

export const thumbnailVariants: Variants = {
  inactive: {
    scale: 1,
    opacity: 0.6
  },
  active: {
    scale: 1.05,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
}

export const buttonHoverVariants: Variants = {
  initial: {
    scale: 1,
    backgroundColor: 'rgba(45, 45, 45, 0.5)'
  },
  hover: {
    scale: 1.1,
    backgroundColor: 'rgba(155, 133, 115, 0.9)',
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  tap: {
    scale: 0.95
  }
}

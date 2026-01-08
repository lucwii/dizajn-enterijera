export interface CarouselImage {
  url: string
  alt: string
}

export interface CarouselState {
  currentIndex: number
  direction: 'left' | 'right' | null
  isAnimating: boolean
}

export interface UseCarouselReturn {
  currentIndex: number
  direction: 'left' | 'right' | null
  isAnimating: boolean
  goToNext: () => void
  goToPrevious: () => void
  goToIndex: (index: number) => void
  canGoNext: boolean
  canGoPrevious: boolean
}

'use client'

import { useState, useEffect, useCallback } from 'react'
import { CarouselState, UseCarouselReturn } from './types'

export function useCarousel(totalImages: number): UseCarouselReturn {
  const [state, setState] = useState<CarouselState>({
    currentIndex: 0,
    direction: null,
    isAnimating: false
  })

  const goToNext = useCallback(() => {
    if (state.isAnimating || state.currentIndex >= totalImages - 1) return
    setState(prev => ({
      currentIndex: prev.currentIndex + 1,
      direction: 'right',
      isAnimating: true
    }))
  }, [state.currentIndex, state.isAnimating, totalImages])

  const goToPrevious = useCallback(() => {
    if (state.isAnimating || state.currentIndex <= 0) return
    setState(prev => ({
      currentIndex: prev.currentIndex - 1,
      direction: 'left',
      isAnimating: true
    }))
  }, [state.currentIndex, state.isAnimating])

  const goToIndex = useCallback((index: number) => {
    if (state.isAnimating || index === state.currentIndex) return
    setState({
      currentIndex: index,
      direction: index > state.currentIndex ? 'right' : 'left',
      isAnimating: true
    })
  }, [state.currentIndex, state.isAnimating])

  useEffect(() => {
    if (state.isAnimating) {
      const timer = setTimeout(() => {
        setState(prev => ({ ...prev, isAnimating: false, direction: null }))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [state.isAnimating])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

  return {
    currentIndex: state.currentIndex,
    direction: state.direction,
    isAnimating: state.isAnimating,
    goToNext,
    goToPrevious,
    goToIndex,
    canGoNext: state.currentIndex < totalImages - 1,
    canGoPrevious: state.currentIndex > 0
  }
}

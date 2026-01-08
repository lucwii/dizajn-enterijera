'use client'

import { useState, useEffect, useCallback } from 'react'
import { Project } from '@/app/types/projects'

export interface UseProjectModalReturn {
  activeProject: Project | null
  isOpen: boolean
  open: (project: Project) => void
  close: () => void
}

export function useProjectModal(): UseProjectModalReturn {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const open = useCallback((project: Project) => {
    setActiveProject(project)
  }, [])

  const close = useCallback(() => {
    setActiveProject(null)
  }, [])

  useEffect(() => {
    if (!activeProject) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [activeProject, close])

  useEffect(() => {
    if (activeProject) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [activeProject])

  return {
    activeProject,
    isOpen: activeProject !== null,
    open,
    close
  }
}
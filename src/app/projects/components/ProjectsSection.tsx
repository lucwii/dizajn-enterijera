'use client'

import { SectionHeading } from '@/components/ui'
import FadeIn from '@/components/animations/FadeIn'
import { Project } from '@/app/types/projects'
import { ProjectsGrid } from './ProjectsGrid'
import { ProjectModal } from './ProjectModal'
import { useProjectModal } from './hooks/useProjectModal'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { activeProject, isOpen, open, close } = useProjectModal()

  return (
    <>
      <section id="projekti" className="py-24 md:py-32 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <SectionHeading
              preHeading="Portfolio"
              heading="Naši Glavni Projekti"
              className="mb-16"
            />
          </FadeIn>

          <ProjectsGrid projects={projects} onProjectClick={open} />
        </div>
      </section>

      <ProjectModal project={activeProject} isOpen={isOpen} onClose={close} />
    </>
  )
}

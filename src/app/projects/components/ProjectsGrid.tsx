'use client'

import { motion } from 'framer-motion'
import { Project } from '@/app/types/projects'
import { ProjectCard } from './ProjectCard'

interface ProjectsGridProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export function ProjectsGrid({ projects, onProjectClick }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-[#6b6b6b]">No projects available.</p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-14"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick}
          index={index}
        />
      ))}
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/app/types/projects'

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const imageUrl = project.cover_image || '/images/placeholder-project.jpg'

  return (
    <motion.div
      variants={cardVariants}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="mt-6">
        <h3 className="text-2xl md:text-3xl font-light text-[#2d2d2d]">
          {project.title}
        </h3>
        <p className="text-sm uppercase tracking-widest text-[#9b8573] mt-2">
          {project.category}
        </p>
        {project.short_description && (
          <p className="text-sm text-[#6b6b6b] mt-3 line-clamp-2">
            {project.short_description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

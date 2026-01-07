import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  number?: string
  className?: string
}

export default function Card({ children, number, className }: CardProps) {
  return (
    <div
      className={clsx(
        'relative p-8 md:p-12 border border-[#e8dfd5] rounded-sm',
        'transition-all duration-500',
        'hover:border-[#9b8573] hover:bg-white/50 hover:shadow-lg',
        className
      )}
    >
      {number && (
        <div className="absolute top-8 right-8 text-6xl md:text-7xl font-light text-[#9b8573]/10 select-none">
          {number}
        </div>
      )}
      {children}
    </div>
  )
}

import { ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block px-4 py-2 text-sm font-medium tracking-wide uppercase',
        'bg-[#e8dfd5]/80 text-[#2d2d2d] backdrop-blur-sm rounded-sm',
        className
      )}
    >
      {children}
    </span>
  )
}

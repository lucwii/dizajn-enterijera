import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionHeadingProps {
  preHeading?: string
  heading: string | ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  preHeading,
  heading,
  align = 'center',
  className
}: SectionHeadingProps) {
  return (
    <div className={clsx(
      'space-y-4',
      align === 'center' && 'text-center',
      className
    )}>
      {preHeading && (
        <p className="text-sm font-medium tracking-widest uppercase text-[#9b8573]">
          {preHeading}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d2d2d] leading-tight">
        {heading}
      </h2>
    </div>
  )
}

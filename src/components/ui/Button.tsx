'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-[#9b8573] text-white hover:bg-[#8b7355] hover:scale-[1.02] hover:shadow-xl',
    secondary: 'border-2 border-[#9b8573] text-[#9b8573] hover:bg-[#9b8573] hover:text-white',
    ghost: 'text-[#9b8573] hover:bg-[#f0ebe6]'
  }

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-5 text-base md:text-lg'
  }

  const classNames = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classNames} {...props}>
      {content}
    </button>
  )
}

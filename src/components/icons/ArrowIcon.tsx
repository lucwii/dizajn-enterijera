interface ArrowIconProps {
  className?: string
  direction?: 'right' | 'left' | 'up' | 'down'
}

export default function ArrowIcon({ className, direction = 'right' }: ArrowIconProps) {
  const rotationMap = {
    right: 'rotate-0',
    down: 'rotate-90',
    left: 'rotate-180',
    up: '-rotate-90'
  }

  return (
    <svg
      className={`w-5 h-5 ${rotationMap[direction]} ${className || ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  )
}

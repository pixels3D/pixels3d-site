import React from 'react'
import { motion } from 'framer-motion'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface NeonButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function NeonButton({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button'
}: NeonButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-black focus:ring-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]',
    secondary: 'bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black focus:ring-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center space-x-2"
    >
      {Icon && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} />}
      <span>{children}</span>
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  )
}
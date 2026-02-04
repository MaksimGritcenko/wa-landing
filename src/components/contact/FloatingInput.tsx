import { FC, useState, ChangeEvent, FocusEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingInputProps {
  id: string
  label: string
  type?: 'text' | 'email' | 'textarea'
  value: string
  onChange: (value: string) => void
  required?: boolean
  error?: string
}

/**
 * Input with floating label animation
 * Center-out underline expansion on focus
 */
export const FloatingInput: FC<FloatingInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value)
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false)
  }

  const isLabelFloating = isFocused || hasValue

  const baseClasses = `
    w-full bg-transparent border-0 border-b-0.5 border-obsidian-500
    text-obsidian-100 placeholder-transparent
    focus:outline-none transition-colors duration-300
    pt-6 pb-2
  `

  return (
    <div className="relative">
      {/* Input or Textarea */}
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          rows={4}
          className={cn(baseClasses, 'resize-none')}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          className={baseClasses}
        />
      )}

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent-cyan origin-center"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      />

      {/* Floating label */}
      <motion.label
        htmlFor={id}
        animate={{
          y: isLabelFloating ? -12 : 8,
          fontSize: isLabelFloating ? '0.75rem' : '1rem',
          color: isFocused
            ? '#06b6d4'
            : isLabelFloating
            ? '#94a3b8'
            : '#64748b',
        }}
        transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        className="absolute left-0 pointer-events-none"
      >
        {label}
        {required && <span className="text-accent-cyan ml-1">*</span>}
      </motion.label>

      {/* Error message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 left-0 text-xs text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

'use client'

import { ComponentProps, useEffect, useRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const sheetVariants = cva(
  'fixed z-50 bg-surface-container-lowest shadow-xl transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=closed]:animate-out data-[state=open]:animate-in',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

interface SheetProps {
  open: boolean
  onClose: () => void
  side?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
  className?: string
}

export function Sheet({ open, onClose, side = 'right', children, className }: SheetProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/40 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in"
        data-state={open ? 'open' : 'closed'}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(sheetVariants({ side }), className)}
        data-state={open ? 'open' : 'closed'}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  )
}

export function SheetHeader({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5 p-4 border-b border-outline-variant', className)}
      {...props}
    />
  )
}

export function SheetTitle({
  className,
  ...props
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('text-lg font-semibold text-onSurface', className)}
      {...props}
    />
  )
}

export function SheetDescription({
  className,
  ...props
}: ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-sm text-onSurface-variant', className)}
      {...props}
    />
  )
}

export function SheetContent({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-1 flex-col overflow-y-auto p-4', className)}
      {...props}
    />
  )
}

export function SheetFooter({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex items-center gap-2 border-t border-outline-variant p-4', className)}
      {...props}
    />
  )
}

import Link from 'next/link'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

export const buttonVariants = cva(
  'inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      tone: {
        primary:
          'bg-primary text-primary-on hover:bg-primary/90 focus-visible:ring-primary-container',
        secondary:
          'border border-outline-variant bg-surface-container-lowest text-onSurface hover:bg-surface-container focus-visible:ring-outline',
        danger: 'bg-error text-error-on hover:bg-error/90 focus-visible:ring-error-container',
        ghost: 'text-onSurface-variant hover:bg-surface-container focus-visible:ring-outline',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-4 text-sm',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      tone: 'primary',
      size: 'default',
    },
  },
)

export function Button({
  tone,
  size,
  asChild,
  className,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp: ElementType = asChild ? Slot : 'button'

  return (
    <Comp
      {...props}
      className={cn(buttonVariants({ tone, size }), className)}
    />
  )
}

export function LinkButton({
  tone,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ tone, size }), className)}
    />
  )
}

export function Field({
  className,
  ...props
}: ComponentProps<'input'>) {
  return (
    <input
      {...props}
      className={cn(
        'h-11 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 text-sm text-onSurface outline-none transition placeholder:text-onSurface-variant/60 hover:bg-surface-container-low focus:border-primary focus:ring-2 focus:ring-primary/20',
        className,
      )}
    />
  )
}

export function SelectField({
  className,
  ...props
}: ComponentProps<'select'>) {
  return (
    <select
      {...props}
      className={cn(
        'h-11 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 text-sm text-onSurface outline-none transition hover:bg-surface-container-low focus:border-primary focus:ring-2 focus:ring-primary/20',
        className,
      )}
    />
  )
}

export function TextArea({
  className,
  ...props
}: ComponentProps<'textarea'>) {
  return (
    <textarea
      {...props}
      className={cn(
        'min-h-[120px] w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-onSurface outline-none transition placeholder:text-onSurface-variant/60 hover:bg-surface-container-low focus:border-primary focus:ring-2 focus:ring-primary/20',
        className,
      )}
    />
  )
}

export function StatusBadge({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info'
  className?: string
}) {
  const tones = {
    neutral: 'bg-surface-container text-onSurface-variant',
    success: 'bg-primary/10 text-primary',
    warning: 'bg-yellow-50 text-yellow-700',
    danger: 'bg-error/10 text-error',
    info: 'bg-primary-fixed/30 text-primary-onContainer',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string
  description?: string
  action?: ReactNode
  icon?: ReactNode
}) {
  return (
    <div className="mx-auto my-10 flex max-w-xl flex-col items-center justify-center rounded-lg border border-dashed border-outline-variant bg-surface-container-lowest px-6 py-10 text-center">
      {icon && <div className="mb-4 text-onSurface-variant/50">{icon}</div>}
      <h2 className="text-lg font-semibold text-onSurface">{title}</h2>
      {description && (
        <p className="mt-2 text-sm leading-6 text-onSurface-variant">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-outline-variant pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-onSurface">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-onSurface-variant">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}

export function Surface({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn('rounded-lg border border-outline-variant bg-surface-container-lowest p-4 shadow-sm', className)}
    >
      {children}
    </section>
  )
}

export function PageContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export function PaginationBar({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className,
}: {
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 border-t border-outline-variant bg-surface-container-lowest p-4',
        className,
      )}
    >
      <Button
        tone="secondary"
        size="sm"
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
      >
        Previous
      </Button>
      <span className="text-sm text-onSurface-variant">
        {currentPage} / {totalPages}
      </span>
      <Button
        tone="secondary"
        size="sm"
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  )
}

export function Alert({
  title,
  description,
  tone = 'info',
  action,
  className,
}: {
  title?: string
  description?: ReactNode
  tone?: 'info' | 'success' | 'warning' | 'danger'
  action?: ReactNode
  className?: string
}) {
  const tones = {
    info: 'border-primary/30 bg-primary-fixed/20 text-primary-onContainer',
    success: 'border-primary/30 bg-primary/10 text-primary',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
    danger: 'border-error/30 bg-error/10 text-error',
  }

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-lg border p-4',
        tones[tone],
        className,
      )}
    >
      <div className="flex-1">
        {title && <h3 className="text-sm font-semibold">{title}</h3>}
        {description && (
          <div className="mt-1 text-sm leading-5 opacity-90">{description}</div>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export function Skeleton({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-surface-container-high', className)}
      {...props}
    />
  )
}

export function Avatar({
  src,
  alt = '',
  size = 'md',
  className,
}: {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20',
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('rounded-full object-cover', sizes[size], className)}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-surface-container text-onSurface-variant font-semibold',
        sizes[size],
        className,
      )}
    >
      {alt.charAt(0).toUpperCase() || '?'}
    </div>
  )
}

import Link from 'next/link'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const buttonVariants = cva(
  'inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      tone: {
        primary:
          'bg-themeColor text-white hover:bg-mainColor focus-visible:ring-sky-300',
        secondary:
          'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:ring-neutral-300',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-300',
        ghost: 'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-300',
      },
    },
    defaultVariants: {
      tone: 'primary',
    },
  },
)

export function Button({
  tone,
  asChild,
  className,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp: ElementType = asChild ? Slot : 'button'

  return (
    <Comp
      {...props}
      className={cn(buttonVariants({ tone }), className)}
    />
  )
}

export function LinkButton({
  tone,
  className,
  ...props
}: ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ tone }), className)}
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
        'h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:bg-neutral-50 focus:border-sky-700 focus:ring-2 focus:ring-sky-100',
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
        'h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition hover:bg-neutral-50 focus:border-sky-700 focus:ring-2 focus:ring-sky-100',
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
        'min-h-[120px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:bg-neutral-50 focus:border-sky-700 focus:ring-2 focus:ring-sky-100',
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
    neutral: 'bg-neutral-100 text-neutral-700',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-red-50 text-red-700',
    info: 'bg-sky-50 text-sky-700',
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
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="mx-auto my-10 flex max-w-xl flex-col items-center justify-center rounded-md border border-dashed border-neutral-300 bg-white px-6 py-10 text-center">
      <h2 className="text-lg font-semibold text-neutral-950">{title}</h2>
      {description && (
        <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
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
    <div className="mb-6 flex flex-col gap-4 border-b border-neutral-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-normal text-neutral-950">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
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
      className={cn('rounded-md border border-neutral-200 bg-white p-4', className)}
    >
      {children}
    </section>
  )
}

export function PaginationBar({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        'sticky bottom-0 flex items-center justify-end gap-2 border-t border-neutral-200 bg-white p-4',
        className,
      )}
    >
      <Button tone="secondary" type="button">
        Previous
      </Button>
      <Button tone="secondary" type="button">
        Next
      </Button>
    </div>
  )
}

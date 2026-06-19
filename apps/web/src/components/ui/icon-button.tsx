import { ComponentProps, ElementType } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

export const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md transition focus:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      tone: {
        primary: 'bg-primary text-primary-on hover:bg-primary/90 focus-visible:ring-primary-container',
        secondary: 'border border-outline-variant bg-surface-container-lowest text-onSurface-variant hover:bg-surface-container focus-visible:ring-outline',
        ghost: 'text-onSurface-variant hover:bg-surface-container focus-visible:ring-outline',
        danger: 'text-error hover:bg-error/10 focus-visible:ring-error-container',
      },
      size: {
        sm: 'h-8 w-8 p-1',
        md: 'h-10 w-10 p-2',
        lg: 'h-12 w-12 p-2.5',
      },
    },
    defaultVariants: {
      tone: 'ghost',
      size: 'md',
    },
  },
)

export function IconButton({
  tone,
  size,
  asChild,
  className,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof iconButtonVariants> & { asChild?: boolean }) {
  const Comp: ElementType = asChild ? Slot : 'button'

  return (
    <Comp
      {...props}
      className={cn(iconButtonVariants({ tone, size }), className)}
    />
  )
}

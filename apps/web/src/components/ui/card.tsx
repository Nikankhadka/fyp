import { ComponentProps } from 'react'
import { cn } from '../../utils/cn'

export function Card({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-outline-variant bg-surface-container-lowest shadow-sm transition hover:shadow-md',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5 p-4 pb-2', className)}
      {...props}
    />
  )
}

export function CardTitle({
  className,
  ...props
}: ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('text-lg font-semibold leading-tight text-onSurface', className)}
      {...props}
    />
  )
}

export function CardDescription({
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

export function CardContent({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cn('p-4 pt-0', className)} {...props} />
  )
}

export function CardFooter({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex items-center gap-2 border-t border-outline-variant p-4 pt-2', className)}
      {...props}
    />
  )
}

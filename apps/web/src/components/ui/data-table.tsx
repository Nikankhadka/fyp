import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils/cn'

export function DataTable({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('overflow-hidden rounded-md border border-neutral-200 bg-white', className)}>
      <div className="overflow-x-auto" {...props} />
    </div>
  )
}

export function Table({ className, ...props }: ComponentPropsWithoutRef<'table'>) {
  return <table className={cn('min-w-full divide-y divide-neutral-200', className)} {...props} />
}

export function TableHead({ className, ...props }: ComponentPropsWithoutRef<'thead'>) {
  return <thead className={cn('bg-neutral-50', className)} {...props} />
}

export function TableBody({ className, ...props }: ComponentPropsWithoutRef<'tbody'>) {
  return <tbody className={cn('divide-y divide-neutral-200 bg-white', className)} {...props} />
}

export function TableRow({ className, ...props }: ComponentPropsWithoutRef<'tr'>) {
  return <tr className={cn('transition hover:bg-neutral-50', className)} {...props} />
}

export function TableHeaderCell({ className, ...props }: ComponentPropsWithoutRef<'th'>) {
  return (
    <th
      className={cn('px-4 py-3 text-left text-xs font-bold uppercase text-neutral-500', className)}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: ComponentPropsWithoutRef<'td'>) {
  return <td className={cn('px-4 py-3 text-sm text-neutral-700', className)} {...props} />
}

export function TableEmpty({
  colSpan,
  title,
  description,
}: {
  colSpan: number
  title: string
  description?: ReactNode
}) {
  return (
    <TableRow className="hover:bg-white">
      <TableCell colSpan={colSpan} className="py-10 text-center">
        <p className="font-semibold text-neutral-900">{title}</p>
        {description && <p className="mt-2 text-sm text-neutral-500">{description}</p>}
      </TableCell>
    </TableRow>
  )
}

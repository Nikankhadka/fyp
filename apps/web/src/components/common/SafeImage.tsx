'use client'

import Image, { ImageProps } from 'next/image'
import { normalizeImageSrc } from './normalizeImageSrc'

interface SafeImageProps
  extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string | null
  alt: string
  fallbackText?: string
}

export default function SafeImage({
  src,
  alt,
  fallbackText = 'Image unavailable',
  className,
  ...props
}: SafeImageProps) {
  const normalizedSrc = normalizeImageSrc(src)

  if (!normalizedSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-center text-sm text-gray-500 ${className ?? ''}`}
      >
        {fallbackText}
      </div>
    )
  }

  return <Image {...props} src={normalizedSrc} alt={alt} className={className} />
}

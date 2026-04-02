'use client'

import Image, { type ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

function normalizeImageSrc(
  src: string | null | undefined,
  fallbackSrc: string
): string {
  if (typeof src !== 'string') {
    return fallbackSrc
  }

  const trimmedSrc = src.trim()

  if (
    trimmedSrc === '' ||
    trimmedSrc === 'null' ||
    trimmedSrc === 'undefined'
  ) {
    return fallbackSrc
  }

  if (trimmedSrc.startsWith('http://')) {
    return trimmedSrc.replace(/^http:\/\//, 'https://')
  }

  return trimmedSrc
}

type SharedFallbackProps = {
  alt: string
  fallbackClassName?: string
  fallbackSrc?: string
  fallbackText?: string
  src?: string | null
}

type SafeImageProps = Omit<ImageProps, 'alt' | 'src'> & SharedFallbackProps

export function SafeImage({
  alt,
  fallbackClassName,
  fallbackSrc = '/house.png',
  fallbackText = 'Image unavailable',
  src,
  ...props
}: SafeImageProps) {
  const resolvedFallbackSrc = normalizeImageSrc(fallbackSrc, '/house.png')
  const [currentSrc, setCurrentSrc] = useState(
    normalizeImageSrc(src, resolvedFallbackSrc)
  )
  const [showFallbackText, setShowFallbackText] = useState(false)

  useEffect(() => {
    setCurrentSrc(normalizeImageSrc(src, resolvedFallbackSrc))
    setShowFallbackText(false)
  }, [resolvedFallbackSrc, src])

  if (showFallbackText) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={
          fallbackClassName ??
          'flex items-center justify-center bg-gray-100 text-center text-sm text-gray-500'
        }
      >
        {fallbackText}
      </div>
    )
  }

  return (
    <Image
      {...props}
      alt={alt}
      src={currentSrc}
      onError={() => {
        if (currentSrc !== resolvedFallbackSrc) {
          setCurrentSrc(resolvedFallbackSrc)
          return
        }

        setShowFallbackText(true)
      }}
    />
  )
}

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SafeImage from './common/SafeImage'
import { Button } from './ui/primitives'
import { cn } from '../utils/cn'

interface Props {
  images: {
    imgId: string
    imgUrl: string
  }[]
}

export default function Carousel({ images }: Props) {
  const [img, setimg] = useState(0)
  const imageCount = images?.length || 0
  const canGoPrevious = img > 0
  const canGoNext = img < imageCount - 1

  return (
    <div className="relative z-10 mx-auto my-4 w-full">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant bg-surface-container sm:aspect-[16/9] md:aspect-[21/9]">
        <SafeImage
          fill
          src={images?.[img]?.imgUrl}
          className="object-cover"
          alt="Property image"
          fallbackText="Property image unavailable"
        />
      </div>

      {imageCount > 1 && (
        <>
          <Button
            aria-label="Previous property image"
            disabled={!canGoPrevious}
            onClick={() => setimg((current) => Math.max(0, current - 1))}
            type="button"
            tone="secondary"
            className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 p-0 shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            aria-label="Next property image"
            disabled={!canGoNext}
            onClick={() =>
              setimg((current) => Math.min(imageCount - 1, current + 1))
            }
            type="button"
            tone="secondary"
            className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 p-0 shadow-sm"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Button>

          <div className="absolute bottom-3 flex w-full justify-center">
            <div className="flex items-center gap-1 rounded-full bg-neutral-950/45 px-2 py-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show property image ${index + 1}`}
                  aria-current={img === index}
                  onClick={() => setimg(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition',
                    img === index
                      ? 'bg-white'
                      : 'bg-white/45 hover:bg-white/80',
                  )}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

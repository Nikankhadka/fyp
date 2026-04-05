export function normalizeImageSrc(
  src: string | null | undefined
): string | null {
  if (typeof src !== 'string') {
    return null
  }

  const trimmedSrc = src.trim()

  if (
    trimmedSrc === '' ||
    trimmedSrc === 'null' ||
    trimmedSrc === 'undefined'
  ) {
    return null
  }

  if (trimmedSrc.startsWith('http://')) {
    if (
      trimmedSrc.startsWith('http://localhost') ||
      trimmedSrc.startsWith('http://127.0.0.1')
    ) {
      return trimmedSrc
    }

    return trimmedSrc.replace(/^http:\/\//, 'https://')
  }

  return trimmedSrc
}

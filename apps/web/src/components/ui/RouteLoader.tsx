import { Loader2 } from 'lucide-react'

// Shared route-segment loader used by per-segment loading.tsx files so the
// surrounding layout chrome paints immediately while the page's server fetches
// resolve. Mirrors the root app/loading.tsx spinner.
export function RouteLoader() {
  return (
    <main className="w-full">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    </main>
  )
}

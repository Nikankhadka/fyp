import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 rounded-xl border border-outline-variant bg-surface-container-lowest p-12 shadow-sm">
        <h1 className="text-3xl font-bold leading-tight text-onSurface md:text-4xl">Welcome to Meroghar</h1>
        <p className="text-center text-onSurface-variant">Discover extraordinary homes with spectacular views and premium amenities around the world.</p>
        <Link href="/Home" className="mt-4 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-on transition-all hover:bg-primary-container hover:shadow-md">
          Explore Stays
        </Link>
      </div>
    </main>
  )
}

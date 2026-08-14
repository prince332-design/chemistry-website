import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-800 dark:text-white">404</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mt-4">Page not found</p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

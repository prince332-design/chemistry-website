import { sanityClient } from '@/lib/sanity'
import Link from 'next/link'
import { FileText, Download } from 'lucide-react'

const query = `*[_type == "pastPaper"] | order(year desc) {
  _id,
  title,
  year,
  description,
  board,
  file,
  class-> { title },
  subject-> { title }
}`

export default async function PastPapersPage() {
  const papers = await sanityClient.fetch(query)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Past Papers
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Download past papers to practice and prepare for your exams.
        </p>

        {papers.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">No past papers added yet. Please add some in Sanity.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {papers.map((paper: any) => (
              <div
                key={paper._id}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      {paper.title}
                    </h3>
                    {paper.class && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {paper.class.title} · {paper.subject?.title || 'General'}
                      </p>
                    )}
                    {paper.year && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Year: {paper.year}
                      </p>
                    )}
                    {paper.board && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Board: {paper.board}
                      </p>
                    )}
                    {paper.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        {paper.description}
                      </p>
                    )}
                    {paper.file && (
                      <a
                        href={paper.file.asset.url}
                        download
                        className="inline-flex items-center gap-2 mt-3 text-cyan-600 dark:text-cyan-400 hover:underline text-sm font-medium"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
import { sanityClient } from '@/lib/sanity'

const query = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category
}`

export default async function FAQPage() {
  const faqs = await sanityClient.fetch(query)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Find answers to common questions about ChemLab Academy.
        </p>

        {faqs.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">No FAQs added yet. Please add some in Sanity.</p>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq: any) => (
              <div
                key={faq._id}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  {faq.answer}
                </p>
                {faq.category && (
                  <span className="mt-2 inline-block text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
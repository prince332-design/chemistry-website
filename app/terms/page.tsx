export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Terms of Service</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-4 text-slate-600 dark:text-slate-400">
          <p>Welcome to ChemLab Academy. By using our website, you agree to these terms.</p>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-6">Use of Service</h2>
          <p>Our services are provided for educational purposes. You agree to use them responsibly and not for any unlawful purpose.</p>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-6">Content Ownership</h2>
          <p>All content on this website is owned by ChemLab Academy and may not be reproduced without permission.</p>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-6">Contact Us</h2>
          <p>For questions about these terms, contact us at: hello@chemlab.com</p>
        </div>
      </div>
    </div>
  )
}

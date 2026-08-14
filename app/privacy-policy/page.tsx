export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-4 text-slate-600 dark:text-slate-400">
          <p>At ChemLab Academy, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-6">Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, and any messages you send us through our contact form.</p>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-6">How We Use Your Information</h2>
          <p>We use your information to respond to your inquiries, provide our services, and improve our website.</p>

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-6">Contact Us</h2>
          <p>If you have any questions about this policy, contact us at: hello@chemlab.com</p>
        </div>
      </div>
    </div>
  )
}

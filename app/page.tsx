import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Topics />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

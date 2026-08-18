import { sanityClient } from '@/lib/sanity'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const classesQuery = `
  *[
    _type == "class" &&
    active != false
  ]
  | order(order asc, title asc)
  {
    _id,
    title,
    slug,
    educationLevel,
    institutionType,
    description
  }
`

export default async function Home() {

  const classes = await sanityClient.fetch(classesQuery)

  return (
    <main className="min-h-screen">

      <Navbar />

      <Hero />

      <Courses classes={classes} />

      <Features />

      <Testimonials />

      <ContactForm />

      <Footer />

    </main>
  )
}
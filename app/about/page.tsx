import { sanityClient } from '@/lib/sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import Link from 'next/link'
import {
  Users,
  Target,
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Atom,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

const imageBuilder = createImageUrlBuilder(sanityClient)

function urlFor(source: any) {
  return imageBuilder.image(source)
}

const query = `*[_type == "staff" && active != false] | order(order asc) {
  _id,
  name,
  slug,
  role,
  qualification,
  image,
  bio,
  subjects[]-> {
    _id,
    title
  },
  classes[]-> {
    _id,
    title
  }
}`

export default async function AboutPage() {
  const staffMembers = await sanityClient.fetch(query)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              ChemLab Academy
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Empowering students worldwide with world-class chemistry education since 2026.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-cyan-500" />
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                Our Mission
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                To make chemistry accessible, enjoyable, and understandable for every student through innovative teaching methods.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-500" />
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                Our Vision
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                To become the world's leading online chemistry academy, shaping the next generation of scientists and innovators.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                Our Values
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                Excellence, innovation, accessibility, and a genuine passion for teaching chemistry to students worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                10K+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Students
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                50+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Courses
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                30+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Expert Mentors
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                2026
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Founded
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-12">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          {staffMembers.length === 0 ? (

            <p className="text-center text-slate-600 dark:text-slate-400">
              No team members added yet. Please add some in Sanity.
            </p>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {staffMembers.map((staff: any) => {

                const imageUrl = staff.image
                  ? urlFor(staff.image)
                      .width(400)
                      .height(400)
                      .fit('crop')
                      .auto('format')
                      .url()
                  : null

                return (
                  <div
                    key={staff._id}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 text-center"
                  >

                    {/* Teacher Image */}
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-cyan-500/20 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                      {imageUrl ? (

                        <img
                          src={imageUrl}
                          alt={
                            staff.image?.alt ||
                            `${staff.name || 'Teacher'} profile photo`
                          }
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />

                      ) : (

                        <span className="text-white text-3xl font-bold">
                          {staff.name?.charAt(0)?.toUpperCase() || '?'}
                        </span>

                      )}

                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {staff.name}
                    </h3>

                    {staff.role && (
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                        {staff.role}
                      </p>
                    )}

                    {staff.qualification && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        {staff.qualification}
                      </p>
                    )}

                    {staff.bio && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 line-clamp-3">
                        {staff.bio}
                      </p>
                    )}

                    {staff.subjects?.length > 0 && (
                      <div className="mt-4 flex flex-wrap justify-center gap-1.5">

                        {staff.subjects.map((sub: any) => (
                          <span
                            key={sub._id}
                            className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded"
                          >
                            {sub.title}
                          </span>
                        ))}

                      </div>
                    )}

                    {staff.classes?.length > 0 && (
                      <div className="mt-2 flex flex-wrap justify-center gap-1.5">

                        {staff.classes.map((cls: any) => (
                          <span
                            key={cls._id}
                            className="text-xs bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded"
                          >
                            {cls.title}
                          </span>
                        ))}

                      </div>
                    )}

                  </div>
                )
              })}

            </div>

          )}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-12">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              ChemLab Academy?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <GraduationCap className="h-8 w-8 text-cyan-500 flex-shrink-0" />

              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">
                  Expert Faculty
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Learn from PhDs and industry professionals with years of teaching experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <BookOpen className="h-8 w-8 text-blue-500 flex-shrink-0" />

              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">
                  Comprehensive Curriculum
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Structured courses covering O/A-Levels, FSc, and University-level chemistry.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <Atom className="h-8 w-8 text-purple-500 flex-shrink-0" />

              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">
                  Interactive Learning
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  3D molecular visualizations, virtual labs, and interactive simulations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <Users className="h-8 w-8 text-indigo-500 flex-shrink-0" />

              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">
                  Community Support
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  24/7 doubt support, discussion forums, and peer-to-peer learning.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
            Get in Touch
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-slate-600 dark:text-slate-400">

            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-cyan-500" />
              hello@chemlab.com
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-cyan-500" />
              +92 305 8411027
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-cyan-500" />
              Okara, Pakistan
            </div>

          </div>

          <div className="mt-8">

            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}
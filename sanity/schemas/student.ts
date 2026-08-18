export default {
  name: 'student',
  title: 'Student Profile',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // ACADEMIC INFORMATION
    // =========================================================
    {
      name: 'educationLevel',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          { title: 'Middle', value: 'middle' },
          { title: 'Secondary / Matric', value: 'secondary' },
          { title: 'Higher Secondary / Intermediate', value: 'higher-secondary' },
          { title: 'Undergraduate / BS', value: 'undergraduate' },
          { title: 'M.Phil / MS', value: 'mphil-ms' },
          { title: 'PhD', value: 'phd' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'class',
      title: 'Current Class / Grade',
      type: 'reference',
      to: [{ type: 'class' }],
      description:
        'For school and college students.',
    },

    {
      name: 'program',
      title: 'Degree / Program',
      type: 'string',
      options: {
        list: [
          { title: 'BS Chemistry', value: 'bs-chemistry' },
          { title: 'BS Applied Chemistry', value: 'bs-applied-chemistry' },
          { title: 'M.Phil Chemistry', value: 'mphil-chemistry' },
          { title: 'M.Phil Applied Chemistry', value: 'mphil-applied-chemistry' },
          { title: 'Other', value: 'other' },
        ],
      },
      description:
        'For university-level students.',
    },

    {
      name: 'semester',
      title: 'Current Semester',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(8),
      description:
        'For BS students: Semester 1–8.',
    },

    // =========================================================
    // SUBJECTS / COURSES
    // =========================================================
    {
      name: 'enrolledSubjects',
      title: 'Enrolled Subjects / Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subject' }],
        },
      ],
      description:
        'Academic subjects or courses associated with this student.',
    },

    // =========================================================
    // PROFILE
    // =========================================================
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },

    // =========================================================
    // STATUS
    // =========================================================
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },

    // =========================================================
    // NOTES
    // =========================================================
    {
      name: 'notes',
      title: 'Admin Notes',
      type: 'text',
      rows: 4,
      description:
        'Internal notes for administrators. Do not store passwords or sensitive authentication information here.',
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'name',
      level: 'educationLevel',
      program: 'program',
      semester: 'semester',
      media: 'image',
    },

    prepare({
      title,
      level,
      program,
      semester,
      media,
    }: any) {
      return {
        title,
        subtitle: [
          program,
          semester ? `Semester ${semester}` : null,
          level,
        ]
          .filter(Boolean)
          .join(' • ') || 'Student',
        media,
      }
    },
  },
}
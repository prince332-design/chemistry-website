export default {
  name: 'staff',
  title: 'Teacher / Staff',
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
    // ROLE
    // =========================================================
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Founder', value: 'founder' },
          { title: 'Director / Head', value: 'director' },
          { title: 'Professor', value: 'professor' },
          { title: 'Assistant Professor', value: 'assistant-professor' },
          { title: 'Lecturer', value: 'lecturer' },
          { title: 'Senior Teacher / Mentor', value: 'senior-mentor' },
          { title: 'Teacher / Instructor', value: 'teacher' },
          { title: 'Teaching Assistant', value: 'teaching-assistant' },
          { title: 'Guest Lecturer', value: 'guest-lecturer' },
          { title: 'Lab Instructor', value: 'lab-instructor' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'teacher',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // ACADEMIC INFORMATION
    // =========================================================
    {
      name: 'qualification',
      title: 'Highest Qualification',
      type: 'string',
      description:
        'Example: BS Chemistry, M.Phil Chemistry, PhD Chemistry',
    },

    {
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
      description:
        'Example: Analytical Chemistry, Organic Chemistry, Physical Chemistry',
    },

    {
      name: 'institution',
      title: 'University / Institution',
      type: 'string',
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

    {
      name: 'bio',
      title: 'Biography',
      type: 'contentBlock',
      description:
        'Professional biography and teaching background.',
    },

    // =========================================================
    // TEACHING ASSIGNMENTS
    // =========================================================
    {
      name: 'subjects',
      title: 'Subjects / Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subject' }],
        },
      ],
      description:
        'Subjects or university courses taught by this teacher.',
    },

    {
      name: 'classes',
      title: 'Classes / Grades',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'class' }],
        },
      ],
      description:
        'School or college classes taught by this teacher.',
    },

    // =========================================================
    // CONTACT / PROFESSIONAL LINKS
    // =========================================================
    {
      name: 'email',
      title: 'Professional Email',
      type: 'email',
    },

    {
      name: 'website',
      title: 'Personal / Professional Website',
      type: 'url',
    },

    // =========================================================
    // EXPERIENCE
    // =========================================================
    {
      name: 'experience',
      title: 'Teaching Experience',
      type: 'string',
      description:
        'Example: 8 years teaching experience',
    },

    // =========================================================
    // DISPLAY SETTINGS
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description:
        'Controls the order in which teachers appear.',
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description:
        'Disable this teacher if their profile should temporarily be hidden.',
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'name',
      role: 'role',
      qualification: 'qualification',
      media: 'image',
    },

    prepare({
      title,
      role,
      qualification,
      media,
    }: any) {
      const roleLabels: Record<string, string> = {
        founder: 'Founder',
        director: 'Director / Head',
        professor: 'Professor',
        'assistant-professor': 'Assistant Professor',
        lecturer: 'Lecturer',
        'senior-mentor': 'Senior Teacher / Mentor',
        teacher: 'Teacher / Instructor',
        'teaching-assistant': 'Teaching Assistant',
        'guest-lecturer': 'Guest Lecturer',
        'lab-instructor': 'Lab Instructor',
      }

      return {
        title,
        subtitle: [
          roleLabels[role] || role,
          qualification,
        ]
          .filter(Boolean)
          .join(' • '),
        media,
      }
    },
  },
}
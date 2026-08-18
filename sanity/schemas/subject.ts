export default {
  name: 'subject',
  title: 'Subject / Course',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'title',
      title: 'Subject / Course Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'code',
      title: 'Course / Subject Code',
      type: 'string',
      description:
        'Optional. Examples: CHEM-101, CHEM-301, CHEM-401.',
    },

    // =========================================================
    // EDUCATION CONTEXT
    // =========================================================
    {
      name: 'educationLevel',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          {
            title: 'Middle â€” Grades 6â€“8',
            value: 'middle',
          },
          {
            title: 'Secondary / Matric â€” Grades 9â€“10',
            value: 'secondary',
          },
          {
            title: 'Higher Secondary / Intermediate â€” Grades 11â€“12',
            value: 'higher-secondary',
          },
          {
            title: 'Undergraduate / BS',
            value: 'undergraduate',
          },
          {
            title: 'M.Phil / MS',
            value: 'mphil-ms',
          },
          {
            title: 'PhD',
            value: 'phd',
          },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // SCHOOL / COLLEGE
    // =========================================================
    {
      name: 'institutionType',
      title: 'Institution Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'School',
            value: 'school',
          },
          {
            title: 'College',
            value: 'college',
          },
          {
            title: 'University',
            value: 'university',
          },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'board',
      title: 'Board / Examination Authority',
      type: 'reference',
      to: [{ type: 'board' }],
      description:
        'For Pakistani school and college subjects. Leave empty for university courses.',
    },

    {
      name: 'class',
      title: 'Class / Grade',
      type: 'reference',
      to: [{ type: 'class' }],
      description:
        'For school and college subjects. Examples: Class 9, Class 10, Class 11, Class 12.',
    },

    // =========================================================
    // UNIVERSITY PROGRAM
    // =========================================================
    {
      name: 'program',
      title: 'Degree / Program',
      type: 'string',
      options: {
        list: [
          {
            title: 'BS Chemistry',
            value: 'bs-chemistry',
          },
          {
            title: 'BS Applied Chemistry',
            value: 'bs-applied-chemistry',
          },
          {
            title: 'M.Phil Chemistry',
            value: 'mphil-chemistry',
          },
          {
            title: 'M.Phil Applied Chemistry',
            value: 'mphil-applied-chemistry',
          },
          {
            title: 'Other',
            value: 'other',
          },
        ],
      },
      description:
        'Primarily used for university-level courses.',
    },

    {
      name: 'semester',
      title: 'Semester',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1).max(8),
      description:
        'For BS programs: Semester 1â€“8. Leave empty where not applicable.',
    },

    // =========================================================
    // UNIVERSITY ACADEMIC DETAILS
    // =========================================================
    {
      name: 'credits',
      title: 'Credit Hours',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(0),
      description:
        'University course credit hours, if applicable.',
    },

    // =========================================================
    // CONTENT
    // =========================================================
    {
      name: 'description',
      title: 'Subject / Course Description',
      type: 'text',
      rows: 4,
    },

    {
      name: 'image',
      title: 'Subject / Course Image',
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
    // MANAGEMENT
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description:
        'Controls the order in which subjects/courses appear.',
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description:
        'Disable this subject/course if it should temporarily be hidden from the website.',
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'title',
      code: 'code',
      level: 'educationLevel',
      program: 'program',
      semester: 'semester',
      classTitle: 'class.title',
    },

    prepare({
      title,
      code,
      level,
      program,
      semester,
      classTitle,
    }: any) {
      const details = [
        code,
        classTitle,
        program,
        semester ? `Semester ${semester}` : null,
        level,
      ]
        .filter(Boolean)
        .join(' â€¢ ')

      return {
        title,
        subtitle: details || 'Subject / Course',
      }
    },
  },
}
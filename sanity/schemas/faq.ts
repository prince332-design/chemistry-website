export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',

  fields: [
    // =========================================================
    // QUESTION
    // =========================================================
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // ANSWER
    // =========================================================
    {
      name: 'answer',
      title: 'Answer',
      type: 'contentBlock',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // CATEGORY
    // =========================================================
    {
      name: 'category',
      title: 'FAQ Category',
      type: 'string',
      options: {
        list: [
          {
            title: 'General',
            value: 'general',
          },
          {
            title: 'Courses / Subjects',
            value: 'courses',
          },
          {
            title: 'Classes / Programs',
            value: 'programs',
          },
          {
            title: 'Enrollment',
            value: 'enrollment',
          },
          {
            title: 'Learning / Study',
            value: 'learning',
          },
          {
            title: 'Assessments / Quizzes',
            value: 'assessment',
          },
          {
            title: 'Past Papers',
            value: 'past-papers',
          },
          {
            title: 'Teachers / Staff',
            value: 'teachers',
          },
          {
            title: 'Account',
            value: 'account',
          },
          {
            title: 'Payments',
            value: 'payments',
          },
          {
            title: 'Technical Support',
            value: 'technical',
          },
          {
            title: 'Other',
            value: 'other',
          },
        ],
        layout: 'dropdown',
      },
      initialValue: 'general',
    },

    // =========================================================
    // EDUCATION LEVEL
    // =========================================================
    {
      name: 'educationLevel',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          {
            title: 'All Levels',
            value: 'all',
          },
          {
            title: 'Middle (Grades 6–8)',
            value: 'middle',
          },
          {
            title: 'Secondary / Matric (Grades 9–10)',
            value: 'secondary',
          },
          {
            title: 'Higher Secondary / Intermediate (Grades 11–12)',
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
      initialValue: 'all',
    },

    // =========================================================
    // RELATED SUBJECT / COURSE
    // =========================================================
    {
      name: 'subject',
      title: 'Related Subject / Course',
      type: 'reference',
      to: [{ type: 'subject' }],
      description:
        'Optional. Link this FAQ to a specific subject or course.',
    },

    // =========================================================
    // RELATED CLASS
    // =========================================================
    {
      name: 'class',
      title: 'Related Class / Grade',
      type: 'reference',
      to: [{ type: 'class' }],
      description:
        'Optional. Mainly useful for school and college FAQs.',
    },

    // =========================================================
    // FEATURED
    // =========================================================
    {
      name: 'featured',
      title: 'Featured FAQ',
      type: 'boolean',
      initialValue: false,
    },

    // =========================================================
    // DISPLAY ORDER
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },

    // =========================================================
    // ACTIVE
    // =========================================================
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'question',
      category: 'category',
      level: 'educationLevel',
      subject: 'subject.title',
      active: 'active',
    },

    prepare({
      title,
      category,
      level,
      subject,
      active,
    }: any) {
      return {
        title,
        subtitle: [
          category,
          level !== 'all' ? level : null,
          subject,
          active === false ? 'Inactive' : null,
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
}
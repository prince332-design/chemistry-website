export default {
  name: 'chapter',
  title: 'Chapter / Unit',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'title',
      title: 'Chapter / Unit Title',
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
      name: 'subject',
      title: 'Subject / Course',
      type: 'reference',
      to: [{ type: 'subject' }],
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // CHAPTER ORDER
    // =========================================================
    {
      name: 'chapterNumber',
      title: 'Chapter / Unit Number',
      type: 'number',
      validation: (Rule: any) =>
        Rule.required().min(1),
      description:
        'Example: Chapter 1, Unit 2, Module 3.',
    },

    // =========================================================
    // CHAPTER INTRODUCTION STRUCTURE
    // Learning Objectives ? Overview ? Introduction
    // =========================================================
    {
      name: 'learningObjectives',
      title: 'Learning Objectives',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description:
        'What students should be able to understand or achieve after completing this chapter.',
    },

    {
      name: 'overview',
      title: 'Chapter / Unit Overview',
      type: 'contentBlock',
      description:
        'A short overview of the chapter. This appears before the detailed introduction.',
    },

    {
      name: 'introduction',
      title: 'Introduction',
      type: 'contentBlock',
      description:
        'Detailed introductory material for the chapter or unit.',
    },

    // =========================================================
    // VISUAL
    // =========================================================
    {
      name: 'coverImage',
      title: 'Chapter Cover Image',
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
    // STUDY INFORMATION
    // =========================================================
    {
      name: 'estimatedTime',
      title: 'Estimated Study Time (Minutes)',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1),
    },

    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {
            title: 'Beginner',
            value: 'beginner',
          },
          {
            title: 'Intermediate',
            value: 'intermediate',
          },
          {
            title: 'Advanced',
            value: 'advanced',
          },
        ],
        layout: 'radio',
      },
    },

    // =========================================================
    // DISPLAY / STATUS
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1),
      description:
        'Controls the order of chapters inside the subject/course.',
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description:
        'Disable this chapter if it should temporarily be hidden from students.',
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'title',
      subject: 'subject.title',
      number: 'chapterNumber',
      difficulty: 'difficulty',
    },

    prepare({
      title,
      subject,
      number,
      difficulty,
    }: any) {
      return {
        title: `${number ? `Chapter ${number}: ` : ''}${title}`,
        subtitle: [
          subject,
          difficulty,
        ]
          .filter(Boolean)
          .join(' • ') || 'Chapter / Unit',
      }
    },
  },
}
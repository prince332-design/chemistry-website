export default {
  name: 'topic',
  title: 'Topic / Lesson',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'title',
      title: 'Topic / Lesson Title',
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
      name: 'chapter',
      title: 'Chapter / Unit',
      type: 'reference',
      to: [{ type: 'chapter' }],
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // LESSON TYPE
    // =========================================================
    {
      name: 'lessonType',
      title: 'Lesson Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Theory / Concept',
            value: 'theory',
          },
          {
            title: 'Lecture',
            value: 'lecture',
          },
          {
            title: 'Practical / Laboratory',
            value: 'practical',
          },
          {
            title: 'Numerical / Problem Solving',
            value: 'numerical',
          },
          {
            title: 'Revision',
            value: 'revision',
          },
          {
            title: 'Exam Preparation',
            value: 'exam-prep',
          },
          {
            title: 'Other',
            value: 'other',
          },
        ],
        layout: 'dropdown',
      },
      initialValue: 'theory',
    },

    // =========================================================
    // LEARNING OBJECTIVES
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
        'What students should understand, explain, calculate, perform, or achieve after completing this lesson.',
    },

    // =========================================================
    // MAIN LESSON CONTENT
    // =========================================================
    {
      name: 'content',
      title: 'Lesson Content',
      type: 'contentBlock',
      description:
        'Main student-facing educational content. Use the professional editor for text, headings, tables, images, files, video, audio, chemistry content, equations, code and other supported blocks.',
    },

    // =========================================================
    // ADDITIONAL RESOURCES
    // =========================================================
    {
      name: 'resources',
      title: 'Additional Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'resource',
          title: 'Resource',

          fields: [
            {
              name: 'title',
              title: 'Resource Title',
              type: 'string',
              validation: (Rule: any) =>
                Rule.required(),
            },

            {
              name: 'type',
              title: 'Resource Type',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'PDF / Document',
                    value: 'document',
                  },
                  {
                    title: 'Video',
                    value: 'video',
                  },
                  {
                    title: 'Audio',
                    value: 'audio',
                  },
                  {
                    title: 'External Link',
                    value: 'link',
                  },
                  {
                    title: 'Image',
                    value: 'image',
                  },
                ],
              },
            },

            {
              name: 'file',
              title: 'File',
              type: 'file',
            },

            {
              name: 'image',
              title: 'Image',
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
              name: 'url',
              title: 'External URL',
              type: 'url',
            },

            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    },

    // =========================================================
    // OPTIONAL DIRECT MEDIA
    // =========================================================
    {
      name: 'videoUrl',
      title: 'Lesson Video URL',
      type: 'url',
      description:
        'Optional YouTube, Vimeo, or other educational video.',
    },

    {
      name: 'audioUrl',
      title: 'Lesson Audio URL',
      type: 'url',
      description:
        'Optional audio explanation, lecture, or pronunciation.',
    },

    // =========================================================
    // ACCESS / ENROLLMENT
    // =========================================================
    {
      name: 'free',
      title: 'Free / Demo Lesson',
      type: 'boolean',
      initialValue: false,
      description:
        'Allow students to access this lesson without paid enrollment.',
    },

    // =========================================================
    // STUDY INFORMATION
    // =========================================================
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

    {
      name: 'timeEstimate',
      title: 'Estimated Study Time (Minutes)',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1),
    },

    // =========================================================
    // ORDER / STATUS
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1),
      description:
        'Controls the lesson order inside the chapter/unit.',
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description:
        'Disable this lesson if it should temporarily be hidden from students.',
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'title',
      chapter: 'chapter.title',
      type: 'lessonType',
      free: 'free',
      order: 'order',
    },

    prepare({
      title,
      chapter,
      type,
      free,
      order,
    }: any) {
      const lessonTypeLabels: Record<string, string> = {
        theory: 'Theory',
        lecture: 'Lecture',
        practical: 'Practical',
        numerical: 'Numerical',
        revision: 'Revision',
        'exam-prep': 'Exam Prep',
        other: 'Other',
      }

      return {
        title: `${order ? `${order}. ` : ''}${title}`,
        subtitle: [
          chapter,
          lessonTypeLabels[type] || type,
          free ? 'Free' : 'Enrolled',
        ]
          .filter(Boolean)
          .join(' â€¢ '),
      }
    },
  },
}
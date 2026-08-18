export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'title',
      title: 'Blog Title',
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
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 3,
      description:
        'Short summary shown on blog cards and listing pages.',
    },

    // =========================================================
    // MAIN CONTENT
    // =========================================================
    {
      name: 'content',
      title: 'Blog Content',
      type: 'contentBlock',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // FEATURED IMAGE
    // =========================================================
    {
      name: 'mainImage',
      title: 'Featured Image',
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
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    },

    // =========================================================
    // AUTHOR
    // =========================================================
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'staff' }],
      description:
        'Select the teacher, mentor, professor, or staff member who wrote the post.',
    },

    // =========================================================
    // CATEGORY
    // =========================================================
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      description:
        'Select one or more blog categories.',
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
        'Optional. Connect the blog post to a subject or university course.',
    },

    // =========================================================
    // PUBLISHING
    // =========================================================
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },

    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    },

    // =========================================================
    // ACCESS / STATUS
    // =========================================================
    {
      name: 'free',
      title: 'Free Article',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      level: 'educationLevel',
      subject: 'subject.title',
      publishedAt: 'publishedAt',
      featured: 'featured',
      media: 'mainImage',
    },

    prepare({
      title,
      author,
      level,
      subject,
      publishedAt,
      featured,
      media,
    }: any) {
      return {
        title: `${featured ? '? ' : ''}${title}`,
        subtitle: [
          author,
          subject,
          level !== 'all' ? level : null,
          publishedAt
            ? new Date(publishedAt).toLocaleDateString()
            : 'Draft',
        ]
          .filter(Boolean)
          .join(' • '),
        media,
      }
    },
  },
}
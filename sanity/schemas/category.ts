export default {
  name: 'category',
  title: 'Blog Category',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Category Name',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'title',
      active: 'active',
    },

    prepare({ title, active }: any) {
      return {
        title,
        subtitle: active === false ? 'Inactive' : 'Active',
      }
    },
  },
}
export default {
  name: 'board',
  title: 'Board / Examination Authority',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Board Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },

    {
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      description: 'Example: BISE Lahore, FBISE, BISE Multan'
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },

    {
      name: 'type',
      title: 'Board Type',
      type: 'string',
      options: {
        list: [
          { title: 'School / Secondary Board', value: 'school' },
          { title: 'Intermediate / College Board', value: 'college' },
          { title: 'Combined School & College Board', value: 'combined' },
          { title: 'University / Higher Education', value: 'university' },
          { title: 'Other Examination Authority', value: 'other' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },

    {
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'Pakistan',
      validation: (Rule: any) => Rule.required()
    },

    {
      name: 'province',
      title: 'Province / Region',
      type: 'string',
      options: {
        list: [
          { title: 'Punjab', value: 'punjab' },
          { title: 'Sindh', value: 'sindh' },
          { title: 'Khyber Pakhtunkhwa', value: 'kpk' },
          { title: 'Balochistan', value: 'balochistan' },
          { title: 'Islamabad Capital Territory', value: 'ict' },
          { title: 'Azad Jammu & Kashmir', value: 'ajk' },
          { title: 'Gilgit-Baltistan', value: 'gilgit-baltistan' },
          { title: 'National / Federal', value: 'federal' },
          { title: 'Other', value: 'other' }
        ]
      }
    },

    {
      name: 'website',
      title: 'Official Website',
      type: 'url'
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],

  preview: {
    select: {
      title: 'title',
      shortName: 'shortName',
      province: 'province'
    },

    prepare({ title, shortName, province }: any) {
      return {
        title,
        subtitle: `${shortName || ''}${province ? ` • ${province}` : ''}`
      }
    }
  }
}
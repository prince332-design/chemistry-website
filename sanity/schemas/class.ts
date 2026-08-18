export default {
  name: 'class',
  title: 'Class / Grade',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Class / Grade',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: 'Class 6', value: '6' },
          { title: 'Class 7', value: '7' },
          { title: 'Class 8', value: '8' },
          { title: 'Class 9 (Matric Part 1)', value: '9' },
          { title: 'Class 10 (Matric Part 2)', value: '10' },
          { title: 'Class 11 (Intermediate / HSSC Part 1)', value: '11' },
          { title: 'Class 12 (Intermediate / HSSC Part 2)', value: '12' }
        ]
      }
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
      name: 'educationLevel',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          { title: 'Middle (Grades 6â€“8)', value: 'middle' },
          { title: 'Secondary / Matric (Grades 9â€“10)', value: 'secondary' },
          { title: 'Higher Secondary / Intermediate (Grades 11â€“12)', value: 'higher-secondary' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },

    {
      name: 'institutionType',
      title: 'Institution Type',
      type: 'string',
      options: {
        list: [
          { title: 'School', value: 'school' },
          { title: 'College', value: 'college' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },

    {
      name: 'board',
      title: 'Board',
      type: 'reference',
      to: [{ type: 'board' }],
      description:
        'Select the Pakistani examination board applicable to this class.'
    },

    {
      name: 'group',
      title: 'Group / Stream',
      type: 'string',
      options: {
        list: [
          { title: 'Science â€“ Pre-Medical', value: 'premedical' },
          { title: 'Science â€“ Pre-Engineering', value: 'preengineering' },
          { title: 'Computer Science / ICS', value: 'ics' },
          { title: 'Commerce', value: 'commerce' },
          { title: 'General Science', value: 'generalscience' },
          { title: 'Humanities / Arts', value: 'humanities' },
          { title: 'Technical / DAE', value: 'technical' },
          { title: 'Other', value: 'other' }
        ]
      },
      description:
        'Mainly applicable to Intermediate and other stream-based programs.'
    },

    {
      name: 'description',
      title: 'Class Description',
      type: 'text',
      rows: 4
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order in which classes appear.'
    },

    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description:
        'Disable this class if it should temporarily not appear on the platform.'
    }
  ],

  preview: {
    select: {
      title: 'title',
      level: 'educationLevel',
      institution: 'institutionType'
    },
    prepare({ title, level, institution }: any) {
      return {
        title,
        subtitle: `${institution || 'Education'} â€¢ ${level || 'Level'}`
      }
    }
  }
}
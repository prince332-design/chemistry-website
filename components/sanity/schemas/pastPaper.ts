export default {
  name: 'pastPaper',
  title: 'Past Paper',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., Chemistry Past Paper 2024'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: [{ type: 'class' }]
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: [{ type: 'subject' }]
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number'
    },
    {
      name: 'file',
      title: 'PDF File',
      type: 'file',
      description: 'Upload the past paper PDF'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'board',
      title: 'Board',
      type: 'string',
      options: {
        list: ['Punjab Board', 'FBISE', 'Sindh Board', 'KPK Board', 'Balochistan Board', 'Cambridge']
      }
    }
  ]
}
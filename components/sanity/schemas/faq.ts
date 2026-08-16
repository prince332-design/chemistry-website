export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Smaller number = higher in list',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['General', 'Courses', 'Enrollment', 'Technical', 'Payment'],
      },
    },
  ],
}
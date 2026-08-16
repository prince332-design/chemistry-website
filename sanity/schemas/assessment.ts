export default {
  name: 'assessment',
  title: 'Assessment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Assessment Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'type',
      title: 'Assessment Type',
      type: 'string',
      options: {
        list: ['Quiz', 'Assignment', 'Past Paper', 'Lab Manual', 'Final Exam', 'Mid Exam']
      }
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: [{ type: 'subject' }]
    },
    {
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: [{ type: 'class' }]
    },
    {
      name: 'topic',
      title: 'Related Topic',
      type: 'reference',
      to: [{ type: 'topic' }]
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'text' },
            { name: 'options', title: 'Options', type: 'array', of: [{ type: 'string' }] },
            { name: 'correctAnswer', title: 'Correct Answer', type: 'string' },
            { name: 'marks', title: 'Marks', type: 'number', initialValue: 1 },
            { name: 'explanation', title: 'Explanation', type: 'text' }
          ]
        }
      ]
    },
    { name: 'file', title: 'Upload File', type: 'file' },
    { name: 'duration', title: 'Duration (minutes)', type: 'number' },
    { name: 'passingScore', title: 'Passing Score (%)', type: 'number' }
  ]
}

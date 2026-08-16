export default {
  name: 'progress',
  title: 'Progress',
  type: 'document',
  fields: [
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }]
    },
    {
      name: 'topic',
      title: 'Topic',
      type: 'reference',
      to: [{ type: 'topic' }]
    },
    {
      name: 'completed',
      title: 'Completed',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'completedAt',
      title: 'Completed At',
      type: 'datetime'
    },
    {
      name: 'quizScore',
      title: 'Quiz Score (%)',
      type: 'number'
    }
  ]
}

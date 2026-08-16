export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    {
      name: 'class',
      title: 'Current Class',
      type: 'reference',
      to: [{ type: 'class' }]
    },
    {
      name: 'enrolledSubjects',
      title: 'Enrolled Subjects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subject' }] }]
    }
  ]
}

export default {
  name: 'enrollment',
  title: 'Enrollment',
  type: 'document',
  fields: [
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }]
    },
    {
      name: 'subject',
      title: 'Subject / Course',
      type: 'reference',
      to: [{ type: 'subject' }]
    },
    {
      name: 'enrolledAt',
      title: 'Enrolled At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Active', 'Completed', 'Dropped', 'Pending']
      },
      initialValue: 'Active'
    }
  ]
}

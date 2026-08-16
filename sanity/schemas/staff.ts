export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: ['Founder', 'Senior Mentor', 'Mentor', 'Teaching Assistant', 'Professor', 'Guest Lecturer']
      }
    },
    { name: 'qualification', title: 'Qualification', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Bio', type: 'text' },
    {
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subject' }] }]
    },
    {
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'class' }] }]
    }
  ]
}

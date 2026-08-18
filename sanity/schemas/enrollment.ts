export default {
  name: 'enrollment',
  title: 'Course Enrollment',
  type: 'document',

  fields: [
    // =========================================================
    // STUDENT
    // =========================================================
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }],
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // COURSE / SUBJECT
    // =========================================================
    {
      name: 'subject',
      title: 'Subject / Course',
      type: 'reference',
      to: [{ type: 'subject' }],
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // ENROLLMENT DATE
    // =========================================================
    {
      name: 'enrolledAt',
      title: 'Enrollment Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // STATUS
    // =========================================================
    {
      name: 'status',
      title: 'Enrollment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Dropped', value: 'dropped' },
          { title: 'Suspended', value: 'suspended' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'pending',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // ACCESS TYPE
    // =========================================================
    {
      name: 'accessType',
      title: 'Access Type',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'free' },
          { title: 'Demo', value: 'demo' },
          { title: 'Paid', value: 'paid' },
          { title: 'Admin Granted', value: 'admin-granted' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'free',
    },

    // =========================================================
    // EXPIRY
    // =========================================================
    {
      name: 'expiresAt',
      title: 'Access Expiry',
      type: 'datetime',
      description:
        'Optional. Leave empty if access does not expire.',
    },

    // =========================================================
    // ADMIN NOTES
    // =========================================================
    {
      name: 'notes',
      title: 'Admin Notes',
      type: 'text',
      rows: 3,
      description:
        'Internal administrative notes. Do not store passwords or payment credentials here.',
    },

    // =========================================================
    // ACTIVE
    // =========================================================
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      student: 'student.name',
      subject: 'subject.title',
      status: 'status',
      accessType: 'accessType',
    },

    prepare({
      student,
      subject,
      status,
      accessType,
    }: any) {
      return {
        title: `${student || 'Student'} ? ${subject || 'Course'}`,
        subtitle: [
          status,
          accessType,
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
}
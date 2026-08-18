export default {
  name: 'progress',
  title: 'Student Progress',
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
    // TOPIC / LESSON
    // =========================================================
    {
      name: 'topic',
      title: 'Topic / Lesson',
      type: 'reference',
      to: [{ type: 'topic' }],
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // PROGRESS STATUS
    // =========================================================
    {
      name: 'status',
      title: 'Progress Status',
      type: 'string',
      options: {
        list: [
          { title: 'Not Started', value: 'not-started' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'not-started',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // COMPLETION
    // =========================================================
    {
      name: 'completed',
      title: 'Completed',
      type: 'boolean',
      initialValue: false,
    },

    {
      name: 'startedAt',
      title: 'Started At',
      type: 'datetime',
    },

    {
      name: 'completedAt',
      title: 'Completed At',
      type: 'datetime',
    },

    // =========================================================
    // STUDY PROGRESS
    // =========================================================
    {
      name: 'progressPercentage',
      title: 'Progress (%)',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(0).max(100),
    },

    {
      name: 'timeSpent',
      title: 'Time Spent (Minutes)',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(0),
    },

    // =========================================================
    // QUIZ / ASSESSMENT RESULT
    // =========================================================
    {
      name: 'quizScore',
      title: 'Latest Quiz Score (%)',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(0).max(100),
    },

    {
      name: 'quizAttempts',
      title: 'Quiz Attempts',
      type: 'number',
      initialValue: 0,
      validation: (Rule: any) =>
        Rule.min(0),
    },

    // =========================================================
    // LAST ACTIVITY
    // =========================================================
    {
      name: 'lastAccessedAt',
      title: 'Last Accessed At',
      type: 'datetime',
    },

    // =========================================================
    // ADMIN NOTES
    // =========================================================
    {
      name: 'notes',
      title: 'Admin Notes',
      type: 'text',
      rows: 3,
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      student: 'student.name',
      topic: 'topic.title',
      status: 'status',
      progress: 'progressPercentage',
      score: 'quizScore',
    },

    prepare({
      student,
      topic,
      status,
      progress,
      score,
    }: any) {
      return {
        title: `${student || 'Student'} ? ${topic || 'Topic'}`,
        subtitle: [
          status,
          progress !== undefined
            ? `${progress}%`
            : null,
          score !== undefined
            ? `Score: ${score}%`
            : null,
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
}
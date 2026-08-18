export default {
  name: 'assessment',
  title: 'Assessment / Quiz',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'title',
      title: 'Assessment Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // ACADEMIC LOCATION
    // =========================================================
    {
      name: 'topic',
      title: 'Topic / Lesson',
      type: 'reference',
      to: [{ type: 'topic' }],
      description:
        'Connect this assessment to a specific topic or lesson.',
    },

    // =========================================================
    // ASSESSMENT TYPE
    // =========================================================
    {
      name: 'type',
      title: 'Assessment Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'MCQ Quiz',
            value: 'mcq',
          },
          {
            title: 'Multiple Select',
            value: 'multiple-select',
          },
          {
            title: 'True / False',
            value: 'true-false',
          },
          {
            title: 'Short Answer',
            value: 'short-answer',
          },
          {
            title: 'Long Answer',
            value: 'long-answer',
          },
          {
            title: 'Numerical / Problem Solving',
            value: 'numerical',
          },
          {
            title: 'Mixed Assessment',
            value: 'mixed',
          },
          {
            title: 'Practice Test',
            value: 'practice-test',
          },
          {
            title: 'Exam / Past Paper',
            value: 'exam',
          },
        ],
        layout: 'dropdown',
      },
      initialValue: 'mcq',
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // INSTRUCTIONS
    // =========================================================
    {
      name: 'instructions',
      title: 'Assessment Instructions',
      type: 'contentBlock',
      description:
        'Instructions students should read before starting the assessment.',
    },

    // =========================================================
    // QUESTIONS
    // =========================================================
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'question',
          title: 'Question',

          fields: [
            // -------------------------------------------------
            // QUESTION TEXT
            // -------------------------------------------------
            {
              name: 'questionText',
              title: 'Question',
              type: 'contentBlock',
              validation: (Rule: any) =>
                Rule.required(),
              description:
                'Use the content editor for text, images, equations, tables, chemistry structures, etc.',
            },

            // -------------------------------------------------
            // QUESTION TYPE
            // -------------------------------------------------
            {
              name: 'questionType',
              title: 'Question Type',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'MCQ',
                    value: 'mcq',
                  },
                  {
                    title: 'Multiple Select',
                    value: 'multiple-select',
                  },
                  {
                    title: 'True / False',
                    value: 'true-false',
                  },
                  {
                    title: 'Short Answer',
                    value: 'short-answer',
                  },
                  {
                    title: 'Long Answer',
                    value: 'long-answer',
                  },
                  {
                    title: 'Numerical / Problem',
                    value: 'numerical',
                  },
                ],
                layout: 'dropdown',
              },
              initialValue: 'mcq',
            },

            // -------------------------------------------------
            // ANSWER OPTIONS
            // -------------------------------------------------
            {
              name: 'options',
              title: 'Answer Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'option',
                  title: 'Option',

                  fields: [
                    {
                      name: 'text',
                      title: 'Option Text',
                      type: 'contentBlock',
                      validation: (Rule: any) =>
                        Rule.required(),
                    },

                    {
                      name: 'isCorrect',
                      title: 'Correct Answer',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                },
              ],
              description:
                'Use for MCQ, multiple-select, and true/false questions.',
            },

            // -------------------------------------------------
            // FIXED ANSWER
            // -------------------------------------------------
            {
              name: 'correctAnswer',
              title: 'Correct Answer',
              type: 'string',
              description:
                'Use for short-answer or numerical questions where a fixed answer is required.',
            },

            // -------------------------------------------------
            // ACCEPTED ANSWERS
            // -------------------------------------------------
            {
              name: 'acceptedAnswers',
              title: 'Accepted Answers',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
              description:
                'Alternative correct answers that should also be accepted.',
            },

            // -------------------------------------------------
            // ANSWER EXPLANATION
            // -------------------------------------------------
            {
              name: 'explanation',
              title: 'Answer Explanation',
              type: 'contentBlock',
              description:
                'Explanation shown after the student submits the answer.',
            },

            // -------------------------------------------------
            // MARKS
            // -------------------------------------------------
            {
              name: 'marks',
              title: 'Marks',
              type: 'number',
              initialValue: 1,
              validation: (Rule: any) =>
                Rule.min(0),
            },

            // -------------------------------------------------
            // QUESTION ORDER
            // -------------------------------------------------
            {
              name: 'order',
              title: 'Question Number',
              type: 'number',
              validation: (Rule: any) =>
                Rule.min(1),
            },
          ],
        },
      ],

      validation: (Rule: any) =>
        Rule.min(1),
    },

    // =========================================================
    // SCORING
    // =========================================================
    {
      name: 'passingPercentage',
      title: 'Passing Percentage',
      type: 'number',
      initialValue: 50,
      validation: (Rule: any) =>
        Rule.min(0).max(100),
    },

    // =========================================================
    // TIME & ATTEMPTS
    // =========================================================
    {
      name: 'timeLimit',
      title: 'Time Limit (Minutes)',
      type: 'number',
      description:
        'Set 0 or leave empty for no time limit.',
      validation: (Rule: any) =>
        Rule.min(0),
    },

    {
      name: 'attemptsAllowed',
      title: 'Attempts Allowed',
      type: 'number',
      initialValue: 1,
      validation: (Rule: any) =>
        Rule.min(1),
    },

    // =========================================================
    // RESULT SETTINGS
    // =========================================================
    {
      name: 'showResults',
      title: 'Show Results Immediately',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'showCorrectAnswers',
      title: 'Show Correct Answers',
      type: 'boolean',
      initialValue: true,
      description:
        'Allow students to see correct answers after submission.',
    },

    {
      name: 'showExplanations',
      title: 'Show Answer Explanations',
      type: 'boolean',
      initialValue: true,
      description:
        'Allow students to see explanations after submission.',
    },

    // =========================================================
    // RANDOMIZATION
    // =========================================================
    {
      name: 'randomizeQuestions',
      title: 'Randomize Questions',
      type: 'boolean',
      initialValue: false,
    },

    {
      name: 'randomizeOptions',
      title: 'Randomize Answer Options',
      type: 'boolean',
      initialValue: false,
    },

    // =========================================================
    // ACCESS
    // =========================================================
    {
      name: 'free',
      title: 'Free Assessment',
      type: 'boolean',
      initialValue: true,
      description:
        'Allow students to attempt this assessment without paid enrollment.',
    },

    // =========================================================
    // STATUS
    // =========================================================
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description:
        'Disable this assessment if it should temporarily be hidden from students.',
    },

    // =========================================================
    // DISPLAY ORDER
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description:
        'Controls the order in which assessments appear.',
    },
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================
  preview: {
    select: {
      title: 'title',
      type: 'type',
      topic: 'topic.title',
      free: 'free',
    },

    prepare({
      title,
      type,
      topic,
      free,
    }: any) {
      const typeLabels: Record<string, string> = {
        mcq: 'MCQ Quiz',
        'multiple-select': 'Multiple Select',
        'true-false': 'True / False',
        'short-answer': 'Short Answer',
        'long-answer': 'Long Answer',
        numerical: 'Numerical',
        mixed: 'Mixed Assessment',
        'practice-test': 'Practice Test',
        exam: 'Exam / Past Paper',
      }

      return {
        title,
        subtitle: [
          typeLabels[type] || type,
          topic,
          free ? 'Free' : 'Enrolled',
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
}
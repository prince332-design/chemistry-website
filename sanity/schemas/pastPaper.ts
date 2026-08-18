export default {
  name: 'pastPaper',
  title: 'Past Paper',
  type: 'document',

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================
    {
      name: 'title',
      title: 'Past Paper Title',
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
    // EDUCATION LEVEL
    // =========================================================
    {
      name: 'educationLevel',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          { title: 'Middle', value: 'middle' },
          { title: 'Secondary / Matric', value: 'secondary' },
          {
            title: 'Higher Secondary / Intermediate',
            value: 'higher-secondary',
          },
          { title: 'Undergraduate / BS', value: 'undergraduate' },
          { title: 'M.Phil / MS', value: 'mphil-ms' },
          { title: 'PhD', value: 'phd' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // CLASS / GRADE
    // =========================================================
    {
      name: 'class',
      title: 'Class / Grade',
      type: 'reference',
      to: [{ type: 'class' }],
      description:
        'Use for school and college level past papers.',
    },

    // =========================================================
    // BOARD
    // =========================================================
    {
      name: 'board',
      title: 'Board / Examination Authority',
      type: 'reference',
      to: [{ type: 'board' }],
      description:
        'Select the relevant Pakistani examination board.',
    },

    // =========================================================
    // SUBJECT / COURSE
    // =========================================================
    {
      name: 'subject',
      title: 'Subject / Course',
      type: 'reference',
      to: [{ type: 'subject' }],
      validation: (Rule: any) => Rule.required(),
    },

    // =========================================================
    // UNIVERSITY PROGRAM
    // =========================================================
    {
      name: 'program',
      title: 'Degree / Program',
      type: 'string',
      options: {
        list: [
          { title: 'BS Chemistry', value: 'bs-chemistry' },
          {
            title: 'BS Applied Chemistry',
            value: 'bs-applied-chemistry',
          },
          { title: 'M.Phil Chemistry', value: 'mphil-chemistry' },
          {
            title: 'M.Phil Applied Chemistry',
            value: 'mphil-applied-chemistry',
          },
          { title: 'Other', value: 'other' },
        ],
      },
      description:
        'Primarily used for university-level past papers.',
    },

    // =========================================================
    // SEMESTER
    // =========================================================
    {
      name: 'semester',
      title: 'Semester',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1).max(8),
      description:
        'For BS programs: Semester 1–8.',
    },

    // =========================================================
    // EXAMINATION INFORMATION
    // =========================================================
    {
      name: 'year',
      title: 'Exam Year',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(1900).max(2100),
    },

    {
      name: 'examType',
      title: 'Exam Type',
      type: 'string',
      options: {
        list: [
          { title: 'Annual Examination', value: 'annual' },
          { title: 'Supplementary Examination', value: 'supplementary' },
          { title: 'Midterm', value: 'midterm' },
          { title: 'Final / End Semester', value: 'final' },
          { title: 'First Term', value: 'first-term' },
          { title: 'Second Term', value: 'second-term' },
          { title: 'Entry Test', value: 'entry-test' },
          { title: 'Other', value: 'other' },
        ],
      },
    },

    // =========================================================
    // PAPER INFORMATION
    // =========================================================
    {
      name: 'paperType',
      title: 'Paper Type',
      type: 'string',
      options: {
        list: [
          { title: 'Objective / MCQs', value: 'objective' },
          { title: 'Subjective / Theory', value: 'subjective' },
          { title: 'Practical', value: 'practical' },
          { title: 'Numerical / Problem Solving', value: 'numerical' },
          { title: 'Mixed', value: 'mixed' },
        ],
      },
    },

    {
      name: 'totalMarks',
      title: 'Total Marks',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(0),
    },

    {
      name: 'duration',
      title: 'Exam Duration (Minutes)',
      type: 'number',
      validation: (Rule: any) =>
        Rule.min(0),
    },

    // =========================================================
    // PAPER FILE
    // =========================================================
    {
      name: 'paperFile',
      title: 'Past Paper File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule: any) =>
        Rule.required(),
    },

    // =========================================================
    // SOLUTION / ANSWER KEY
    // =========================================================
    {
      name: 'solutionFile',
      title: 'Solution / Answer Key',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    },

    // =========================================================
    // DESCRIPTION
    // =========================================================
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },

    // =========================================================
    // ACCESS
    // =========================================================
    {
      name: 'free',
      title: 'Free Access',
      type: 'boolean',
      initialValue: true,
      description:
        'Allow students to access this past paper without paid enrollment.',
    },

    // =========================================================
    // DISPLAY
    // =========================================================
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },

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
      title: 'title',
      subject: 'subject.title',
      board: 'board.shortName',
      year: 'year',
      examType: 'examType',
      program: 'program',
    },

    prepare({
      title,
      subject,
      board,
      year,
      examType,
      program,
    }: any) {
      return {
        title,
        subtitle: [
          subject,
          board,
          year,
          examType,
          program,
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
}
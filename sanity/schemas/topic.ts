export default {
  name: 'topic',
  title: 'Topic',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Topic Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full content with formatted text, images, and videos'
    },
    {
      name: 'subtopics',
      title: 'Subtopics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Subtopic Title', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
            { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }
          ]
        }
      ]
    },
    {
      name: 'lectureSources',
      title: 'Lecture Sources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Source Type',
              type: 'string',
              options: {
                list: [
                  { title: '📄 PDF Notes', value: 'pdf' },
                  { title: '📝 Manual / Written Lecture', value: 'manual' },
                  { title: '📹 Video (YouTube)', value: 'video' },
                  { title: '🎙️ Audio (Podcast)', value: 'audio' },
                  { title: '📊 PowerPoint / Slides', value: 'slides' },
                  { title: '📁 Google Drive', value: 'gdrive' },
                  { title: '📜 Word Document', value: 'word' },
                  { title: '📊 Excel Sheet', value: 'excel' }
                ]
              }
            },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'file', title: 'Upload File', type: 'file' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'free', title: 'Free Access', type: 'boolean', initialValue: false }
          ]
        }
      ]
    },
    {
      name: 'assessments',
      title: 'Assessments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Assessment Type',
              type: 'string',
              options: {
                list: [
                  { title: '📝 Quiz (MCQs)', value: 'quiz' },
                  { title: '✍️ Assignment', value: 'assignment' },
                  { title: '📋 Past Paper', value: 'pastpaper' },
                  { title: '🧪 Lab Manual', value: 'lab' }
                ]
              }
            },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
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
                    { name: 'marks', title: 'Marks', type: 'number', initialValue: 1 }
                  ]
                }
              ]
            },
            { name: 'file', title: 'Upload File', type: 'file' }
          ]
        }
      ]
    },
    {
      name: 'free',
      title: 'Free Access',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'timeEstimate',
      title: 'Estimated Time (minutes)',
      type: 'number'
    },
    {
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
      }
    }
  ]
}

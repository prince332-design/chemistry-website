export default {
  name: 'subject',
  title: 'Subject / Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Subject / Course Title',
      type: 'string',
      description: 'e.g., Chemistry, Physics, General Science, Organic Chemistry, M.Phil Organic Chemistry'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'isCourse',
      title: 'Is this a Course? (Specialization)',
      type: 'boolean',
      description: '✅ Check this if it is a specialized course (e.g., Organic Chemistry under Chemistry). Leave unchecked for main subjects (e.g., Chemistry, Physics).',
      initialValue: false
    },
    {
      name: 'parentSubject',
      title: 'Parent Subject (Main Subject)',
      type: 'reference',
      to: [{ type: 'subject' }],
      description: 'If this is a specialized course (e.g., Organic Chemistry), select its main subject (e.g., Chemistry).'
    },
    {
      name: 'subjects',
      title: 'Sub-Subjects / Specialized Courses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subject' }] }],
      description: 'If this is a main subject (e.g., Chemistry), add its specialized courses here (e.g., Organic Chemistry, Inorganic Chemistry).'
    },
    {
      name: 'classes',
      title: 'Classes (Where is this taught?)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'class' }] }],
      description: 'Select which classes this subject belongs to (e.g., Class 11, BS 1st Year).'
    },
    {
      name: 'fieldOfStudy',
      title: 'Field / Group',
      type: 'string',
      options: {
        list: [
          { title: '🔬 Pre-Medical (Science)', value: 'premedical' },
          { title: '🔭 Pre-Engineering (Science)', value: 'preengineering' },
          { title: '💻 Computer Science (ICS)', value: 'ics' },
          { title: '📊 Commerce', value: 'commerce' },
          { title: '📚 Humanities / Arts', value: 'humanities' },
          { title: '🧮 General Science', value: 'generalscience' },
          { title: '🎨 Fine Arts', value: 'finearts' },
          { title: '⚖️ Law', value: 'law' },
          { title: '🔧 Technical (DAE)', value: 'technical' }
        ]
      },
      description: 'Select the group for school/college level. Leave blank for university level (BS/M.Phil/PhD) if not applicable.'
    },
    {
      name: 'icon',
      title: 'Icon Name (Lucide)',
      type: 'string',
      description: 'e.g., FlaskConical, Atom, Beaker'
    }
  ]
}

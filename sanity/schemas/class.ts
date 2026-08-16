export default {
  name: 'class',
  title: 'Class / Level',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Class Title',
      type: 'string',
      options: {
        list: [
          // 🏫 School Level (Matric)
          { title: 'Class 6', value: '6' },
          { title: 'Class 7', value: '7' },
          { title: 'Class 8', value: '8' },
          { title: 'Class 9 (Matric Part 1)', value: '9' },
          { title: 'Class 10 (Matric Part 2)', value: '10' },
          // 🎓 College Level (FSc / Intermediate)
          { title: 'Class 11 (FSc Part 1)', value: '11' },
          { title: 'Class 12 (FSc Part 2)', value: '12' },
          // 🏛️ University Level
          { title: 'BS 1st Year', value: 'bs1' },
          { title: 'BS 2nd Year', value: 'bs2' },
          { title: 'BS 3rd Year', value: 'bs3' },
          { title: 'BS (Hons) 4th Year', value: 'bs4' },
          { title: 'M.Phil', value: 'mphil' },
          { title: 'PhD', value: 'phd' }
        ]
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'level',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          { title: '🎒 Middle (Grade 6-8)', value: 'middle' },
          { title: '📚 Secondary (Grade 9-10 / Matric / SSC)', value: 'secondary' },
          { title: '📖 Higher Secondary (Grade 11-12 / Intermediate / HSSC / FSc)', value: 'higher-secondary' },
          { title: '🎓 Undergraduate (BS / BA / BSc)', value: 'undergraduate' },
          { title: '🔬 Postgraduate (M.Sc / MS / M.Phil / PhD)', value: 'postgraduate' },
        ]
      }
    },
    {
      name: 'board',
      title: 'Board (Pakistan)',
      type: 'string',
      options: {
        list: [
          { title: '🏛️ Punjab Board (BISE Lahore)', value: 'punjab' },
          { title: '🏛️ FBISE (Islamabad)', value: 'fbise' },
          { title: '🏛️ Sindh Board (BISE Karachi)', value: 'sindh' },
          { title: '🏛️ KPK Board (BISE Peshawar)', value: 'kpk' },
          { title: '🏛️ Balochistan Board (BISE Quetta)', value: 'balochistan' },
          { title: '🏛️ Aga Khan University Board', value: 'aku' },
          { title: '🏛️ University (No Board)', value: 'university' }
        ]
      },
      description: 'Select board for school/college level, or select University for BS and above'
    },
    {
      name: 'group',
      title: 'Group / Stream',
      type: 'string',
      options: {
        list: [
          { title: '🔬 Science (Pre-Medical)', value: 'premedical' },
          { title: '🔭 Science (Pre-Engineering)', value: 'preengineering' },
          { title: '📊 Commerce', value: 'commerce' },
          { title: '💻 Computer Science (ICS)', value: 'ics' },
          { title: '🧮 General Science', value: 'generalscience' },
          { title: '📚 Humanities / Arts', value: 'humanities' },
          { title: '🎨 Fine Arts', value: 'finearts' },
          { title: '⚖️ Law', value: 'law' },
          { title: '🔧 Technical (DAE)', value: 'technical' }
        ]
      },
      description: 'Select group/stream for college level (11-12), or leave blank for BS and above'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description about this class level'
    }
  ]
}

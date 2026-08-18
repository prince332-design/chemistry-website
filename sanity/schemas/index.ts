import classSchema from './class'
import boardSchema from './board'
import subjectSchema from './subject'
import chapterSchema from './chapter'
import topicSchema from './topic'
import assessmentSchema from './assessment'
import staffSchema from './staff'
import studentSchema from './student'
import enrollmentSchema from './enrollment'
import progressSchema from './progress'
import blogSchema from './blog'
import categorySchema from './category'
import faqSchema from './faq'
import pastPaperSchema from './pastPaper'
import contentBlockSchema from './contentBlock'

export const schemaTypes = [
  // =========================================================
  // EDUCATION STRUCTURE
  // =========================================================
  boardSchema,
  classSchema,
  subjectSchema,
  chapterSchema,
  topicSchema,

  // =========================================================
  // CONTENT & LEARNING
  // =========================================================
  contentBlockSchema,
  assessmentSchema,
  pastPaperSchema,

  // =========================================================
  // PEOPLE & STUDENTS
  // =========================================================
  staffSchema,
  studentSchema,

  // =========================================================
  // ENROLLMENT & PROGRESS
  // =========================================================
  enrollmentSchema,
  progressSchema,

  // =========================================================
  // WEBSITE CONTENT
  // =========================================================
  categorySchema,
  blogSchema,
  faqSchema,
]
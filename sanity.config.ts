import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { table } from '@sanity/table'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'ChemLab Academy CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yfx6cpv1',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    deskTool(),
    visionTool(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
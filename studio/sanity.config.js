import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'palazzo',

  // projectId: '0i1cdi6a',
  // dataset: 'old',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
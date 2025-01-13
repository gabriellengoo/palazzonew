import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskTool} from 'sanity/desk'
import SitePreviewTab from './SitePreviewTab'
import {defaultDocumentNode} from './defaultDocumentNode'
import {
  DesktopIcon,
  InfoOutlineIcon,
  HelpCircleIcon,
  HomeIcon,
  SparklesIcon,
  ConfettiIcon,
  BookIcon,
} from '@sanity/icons' // Example icons
import {Iframe} from 'sanity-plugin-iframe-pane'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Palazzo Eventi',

  projectId: '0i1cdi6a',
  dataset: 'production',

  plugins: [
    media(),
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([

            S.divider(),
            S.listItem()
              .icon(HomeIcon)
              .title('Home')
              .child(
                S.documentTypeList('home')
                  .title('Home')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('home')
                      .views([
                        S.view.form(), // Default editing form
                        S.view
                          .component(Iframe)
                          .options({
                            url: (doc) => `https://palazzonew.vercel.app`,
                          })
                          .title('Preview'),
                      ]),
                  ),
              ),

            S.divider(),
            S.listItem()
              .icon(InfoOutlineIcon)
              .title('About')
              .child(
                S.documentTypeList('about')
                  .title('About')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('about')
                      .views([
                        S.view.form(), // Default editing form
                        S.view
                          .component(Iframe)
                          .options({
                            url: (doc) => `https://palazzonew.vercel.app/about`,
                          })
                          .title('Preview'),
                      ]),
                  ),
              ),

            S.divider(),
            S.listItem()

              .title('Contact')
              .child(
                S.list()
                  .title('Contact')
                  .items([S.documentTypeListItem('contact').title('Contact')]),
              ),

            S.divider(),
            S.listItem()
              .icon(HelpCircleIcon)
              .title('Services')
              // .icon: AddIcon,
              .child(
                S.list()
                  .title('Services')
                  .items([S.documentTypeListItem('services').title('Services')]),
              ),
            S.divider(),
            S.listItem()
              .icon(SparklesIcon)
              .title('Weddings')
              // .icon: AddIcon,
              .child(
                S.list()
                  .title('Weddings')
                  .items([
                    S.documentTypeListItem('works').title('Weddings'),
                    S.documentTypeListItem('project').title('Weddings Individual'),
                  ]),
              ),
            S.divider(),
            S.listItem()
              .icon(SparklesIcon)
              .title('Events')
              .child(
                S.list()
                  .title('Events')
                  .items([
                    S.documentTypeListItem('events').title('Events'),
                    S.documentTypeListItem('projectevents').title('Events Individual'),
                  ]),
              ),
            S.divider(),
            S.listItem()
              .icon(ConfettiIcon)
              .title('Awards')
              .child(
                S.list()
                  .title('Awards')
                  .items([S.documentTypeListItem('awards').title('Awards')]),
              ),
            S.divider(),
            S.listItem()
              .icon(BookIcon)
              .title('Publications')
              .child(
                S.list()
                  .title('Publications ')
                  .items([
                    S.documentTypeListItem('publications').title('Publications'),
                    S.documentTypeListItem('pressindi').title('Publications Individual'),
                  ]),
              ),
            S.divider(),
            S.documentTypeListItem('team').title('Team'),

            S.divider(),
            // Add the new "Live Preview" tab
            S.listItem()
              .icon(DesktopIcon)
              .title('Live Preview')
              .child(S.component(SitePreviewTab).title('Site Preview')),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

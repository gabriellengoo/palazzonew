import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { deskTool } from 'sanity/desk';
import SitePreviewTab from './SitePreviewTab'
// import defaultDocumentNode from './defaultDocumentNode'
// import IframePane from 'sanity-plugin-iframe-pane';

// const IFRAME_URL = 'https://your-site-url.com'; // Replace with your actual site URL

export default defineConfig({
  name: 'default',
  title: 'Palazzo Eventi',

  projectId: '0i1cdi6a',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
        
          


              S.divider(),
              S.listItem()
        
                .title('About')
                // .icon: AddIcon,
                .child(
                  S.list()
                    .title('About')
                    .items([
                      S.documentTypeListItem('about').title('About'),
                    ])
                ),

                S.divider(),
                S.listItem()
          
                  .title('Contact')
                  // .icon: AddIcon,
                  .child(
                    S.list()
                      .title('Contact')
                      .items([
                        S.documentTypeListItem('contact').title('Contact'),
                      ])
                  ),

                  S.divider(),
                  S.listItem()
            
                    .title('Services')
                    // .icon: AddIcon,
                    .child(
                      S.list()
                        .title('Services')
                        .items([
                          S.documentTypeListItem('services').title('Services'),
                        ])
                    ),
            S.divider(),
            S.listItem()
      
              .title('Weddings')
              // .icon: AddIcon,
              .child(
                S.list()
                  .title('Weddings')
                  .items([
                    S.documentTypeListItem('works').title('Weddings'),
                    S.documentTypeListItem('project').title('Weddings Individual'),
                 
                  ])
              ),
            S.divider(),
            S.listItem()
            .title('Events')
            .child(
              S.list()
                .title('Events')
                .items([
                 
                  S.documentTypeListItem('events').title('Events'),
                  S.documentTypeListItem('projectevents').title('Events Individual'),
                
                ])
            ),
          S.divider(),
          S.listItem()
          .title('Awards')
          .child(
            S.list()
              .title('Awards')
              .items([

                S.documentTypeListItem('awards').title('Awards'),
              ])
          ),
        S.divider(),
        S.listItem()
        .title('Publications')
        .child(
          S.list()
            .title('Publications ')
            .items([
             
              S.documentTypeListItem('publications').title('Publications'),
              S.documentTypeListItem('pressindi').title('Publications Individual'),
          
            ])
        ),
      S.divider(),
            S.documentTypeListItem('team').title('Team'),

            S.divider(),
            // Add the new "Live Preview" tab
            S.listItem()
              .title('Live Preview')
              .child(
                S.component(SitePreviewTab).title('Site Preview')
              ),
            // Add Live Preview tab
            // S.listItem()
            //   .title('Live Preview')
            //   .child(
            //     IframePane({
            //       title: 'Site Preview',
            //       url: IFRAME_URL,
            //       options: {
            //         autoResize: true,
            //         style: { height: '100vh', width: '100%' },
            //       },
            //     })
            //   ),
          ]),
    }),
    // structureTool({
    //   defaultDocumentNode,
    //   structure,
    // }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});

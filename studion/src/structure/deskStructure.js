// src/structure/deskStructure.js
import { StructureBuilder as S } from 'sanity/desk'; // Use named import from 'sanity/desk'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem => !['post', 'author'].includes(listItem.getId())
      )
    ]);

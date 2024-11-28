// ./src/defaultDocumentNode.js

import { Iframe } from 'sanity-plugin-iframe-pane';

// Function to generate the preview URL based on the document's data
function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `${window.location.host}/${doc.slug.current}`
    : `${window.location.host}`;
}

// Export the defaultDocumentNode function for the deskTool() plugin
export const defaultDocumentNode = (S, { schemaType }) => {
  // Only show the preview pane for the `movie` schema type
  if (schemaType === 'movie') {
    return S.document().views([
      S.view.form(), // Default editing form
      S.view
        .component(Iframe)
        .options({
          url: (doc) => getPreviewUrl(doc), // Generate URL dynamically
        })
        .title('Preview'),
    ]);
  }

  // Default view (form only) for other schema types
  return S.document().views([S.view.form()]);
};

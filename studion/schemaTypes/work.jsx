import {HomeIcon} from '@sanity/icons'

export default {
  name: 'works',
  title: 'Weddings Overview',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'seo',
      title: 'Click here for SEO Metadata',
      type: 'seo',  // Reusing the `seo` object schema
      // Collapsible section with initial state set to collapsed
      options: {
        collapsible: true,
        collapsed: true,  // Set to `true` to keep it collapsed by default
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'grid',
      title: 'Grid',
      type: 'grid',  // Assuming grid is already defined in your schema
    },
   
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Wedding Overview',
      };
    },
  },
};

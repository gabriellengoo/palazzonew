// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
import {BookIcon} from '@sanity/icons'

export default {
  name: 'publications',
  title: 'Publications',
  type: 'document',
  icon: BookIcon,
  // icon: "🏠",
  // icon: '🏠',
  // liveEdit: true,
  fields: [
    {
      name: 'seo',
      title: 'CLICK HERE FOR SEO METADATA',
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
      name: 'grid4',
      title: 'Right Grid',
      type: 'grid4',
    },
    {  
      name: 'grid5',
      title: 'Left Grid',
      type: 'grid5',
    },
  
    


  ],
  preview: {
    select: {
      title: 'title',
    },
    // prepare(selection) {
    //   const { title } = selection;
    //   return {
    //     title: `📽️ ${title}`,
    //   };
    // },
  },
};

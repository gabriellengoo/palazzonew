// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
import {SparklesIcon} from '@sanity/icons'

export default {
  name: 'events',
  title: 'Events Overview',
  type: 'document',
  icon: SparklesIcon,
  // icon: "🏠",
  // icon: '🏠',
  // liveEdit: true,
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
      name: 'grid3',
      title: 'Right Grid',
      type: 'grid3',
    },
    {  
      name: 'grid2',
      title: 'Left Grid',
      type: 'grid2',
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

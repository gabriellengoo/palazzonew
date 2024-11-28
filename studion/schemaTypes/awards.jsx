// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
import {ConfettiIcon} from '@sanity/icons'

export default {
  name: 'awards',
  title: 'Awards',
  type: 'document',
  icon: ConfettiIcon,
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
      name: 'grid6',
      title: 'Grid',
      type: 'grid6',
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

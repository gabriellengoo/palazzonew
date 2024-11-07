// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
import {HomeIcon} from '@sanity/icons'

export default {
  name: 'works',
  title: 'Weddings Overview',
  type: 'document',
  icon: HomeIcon,
  // icon: "🏠",
  // icon: '🏠',
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {  
      name: 'grid',
      title: 'Grid',
      type: 'grid',
    }, 
  
    


  ],
  preview: {
    select: {},
  prepare() {
    return {
      title: "Wedding Overview",
    };
      }
    // prepare(selection) {
    //   const { title } = selection;
    //   return {
    //     title: `📽️ ${title}`,
    //   };
    // },
  },
};

// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
import {UserIcon} from '@sanity/icons'
import React from 'react'

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: UserIcon,
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
      name: "titlec",
      title: "Caption",
      type: "string",
      hidden: ({ parent, value }) =>
        !value && (parent?.spacer || parent?.reference),
    },
    {  
      name: 'grid7',
      title: 'Grid',
      type: 'grid7',
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

// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
import {DesktopIcon} from '@sanity/icons'

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: DesktopIcon,
  // icon: "🏠",
  // icon: '🏠',
  // liveEdit: true,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "blockContent",
    },
    {
      name: "address2",
      title: "Address text desktop",
      type: "blockContent",
    },
    {
      name: "contact",
      title: "Contact",
      type: "blockContent",
    },
    {
      name: "email",
      title: "Email",
      type: "blockContent",
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

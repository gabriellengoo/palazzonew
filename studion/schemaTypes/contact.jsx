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

    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'icon', type: 'image', title: 'Icon' }, 
            {
              name: 'show',
              type: 'boolean',
              title: 'Show on Website',
              description: 'Toggle to show or hide this link on the website',
              initialValue: true, // Default to visible
            },
          ],
        },
      ],
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

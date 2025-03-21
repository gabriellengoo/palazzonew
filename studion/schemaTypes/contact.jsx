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
      name: "vemail",
      title: "Vendor Email",
      type: "blockContent",
    },

    {
      name: 'socialMedia',
      type: 'array',
      title: 'Social Media Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https'],
                allowRelative: false
              }),
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'show',
              type: 'boolean',
              title: 'Show on Website',
              description: 'Toggle to show or hide this social media link.',
              initialValue: true,
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

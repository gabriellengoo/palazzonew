// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md';
 // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;


export default {
  name: 'home',
  title: 'Weddings',
  type: 'document',
  // icon: "🏠",
  // icon: '🏠',
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    // {
    //   name: 'grid2',
    //   title: 'More projects grid',
    //   type: 'grid2',
    // },
    {
      name: "sections",
      title: "About Text",
      type: "array",
      of: [
        {
          name: "section",
          title: "Section",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            // {
            //   name: "subtitle",
            //   title: "Subtitle",
            //   type: "string",
            // },
            {
              name: "image",
              title: "About Image",
              type: "image",
            },
            {
              name: "content",
              title: "Content",
              type: "blockContent",
            },
          ],
        },
      ],
    },
    {
      name: "sections2",
      title: "Contact Info",
      type: "array",
      of: [
        {
          name: "section2",
          title: "Section",
          type: "object",
          fields: [
            {
              name: "title2",
              title: "Title",
              type: "string",
            },
            {
              name: "content2", 
              title: "Content",
              type: "blockContent",
            },
          ],
        },
      ],
    },
    {
      name: "sections3",
      title: "Press",
      type: "array",
      of: [
        {
          name: "section3",
          title: "Section",
          type: "object",
          fields: [
            {
              name: "title3",
              title: "Title",
              type: "string",
            },
            {
              name: "content3",
              title: "Content",
              type: "blockContent",
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

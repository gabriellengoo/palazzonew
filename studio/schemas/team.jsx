// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md'; // Import icons from react-icons library
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;


export default {
  name: 'team',
  title: 'Team',
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

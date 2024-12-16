import React from "react";
import {HelpCircleIcon} from '@sanity/icons'
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;
// import WordLimitInput from "./components/WordLimitInput";

const blockConfig = {
  type: 'block',
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'H1', value: 'h1'},
    {title: 'H2', value: 'h2'},
    {title: 'H3', value: 'h3'},
    {title: 'Quote', value: 'blockquote'},
  ],
  lists: [
    {title: 'Bullet', value: 'bullet'},
    {title: 'Numbered', value: 'number'},
  ],
  marks: {
    decorators: [{title: 'Strong', value: 'strong'}],
    annotations: [
      {
        title: 'URL',
        name: 'link',
        type: 'object',
        fields: [
          {
            title: 'URL',
            name: 'href',
            type: 'url',
            validation: (Rule) =>
              Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
          },
        ],
      },
      {
        title: 'Internal Link',
        name: 'internalLink',
        type: 'reference',
        to: [{type: 'project'}],
      },
    ],
  },
}


export default {
  name: "services", 
  title: "Services",
  type: "document",
  icon: HelpCircleIcon,
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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'layout2',
      title: 'Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout1,

    },
    {
      name: 'layout1',
      title: 'Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout2,

    },


    {
      name: "dimage",
      title: "Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      hidden: ({parent}) => !parent?.layout1,
  
    },

    {
      name: "dsubLayoutA",
      title: "Subtitle .Layout A",
      hidden: ({parent}) => !parent?.layout1,
      type: "string",

    },

         
    
    {
      name: "dcontent",
      title: "Left Text Content .Layout A",
      type: "blockContent",
      // inputComponent: WordLimitInput,
      options: { maxWords: 50 },
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      hidden: ({parent}) => !parent?.layout1,
    },
    {
      name: "dcontent2",
      title: "Right Text Content .Layout A",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout2;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
        hidden: ({parent}) => !parent?.layout1,
    }, 
  
    
    {
      name: "dlocationlink",
      title: "Bottom text underlined .Layout A",
      type: "string",
      hidden: ({parent}) => !parent?.layout1,
    },
    {
      name: "dlocation",
      title: "Bottom text .Layout A",
      type: "string",
      hidden: ({parent}) => !parent?.layout1,
    },
   





   
// layb


    {
      name: "dsubLayoutB",
      title: "Subtitle .Layout B",
      hidden: ({parent}) => !parent?.layout2,
      type: "string",
    },

    {
      name: "dimageLayoutB",
      title: "Right Main Image .Layout B",
      type: "image",
      description: "Must be jpg",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      hidden: ({parent}) => !parent?.layout2,

    },


    {
      name: "dcontent2b",
      title: "Right Text Content .Layout B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout2;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
        hidden: ({parent}) => !parent?.layout2,
    }, 

    {
      name: "dlocationlinkb",
      title: "Bottom text underlined .Layout B",
      type: "string",
      hidden: ({parent}) => !parent?.layout2,
 
    },
    {
      name: "dlocationb",
      title: "Bottom text .Layout B",
      type: "string",
      hidden: ({parent}) => !parent?.layout2,
    },
   



  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client.0.label",
      image: "slider.0.images.0.image",
      video: "slider.0.images.0.video.asset.playbackId",
      thumbnailTime: "slider.0.images.0.thumbnailTime",
    },
    prepare(selection) {
      const { image, title, video, subtitle, thumbnailTime } = selection;
      let media;
      if (video) {
        media = (
          <img
            src={`https://image.mux.com/${video}/animated.gif?start=${thumbnailTime || 0}`}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        );
      } else if (image) {
        media = image;
      }
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};

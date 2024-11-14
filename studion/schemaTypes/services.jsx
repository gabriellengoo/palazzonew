import React from "react";
import {HelpCircleIcon} from '@sanity/icons'
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;

export default {
  name: "services", 
  title: "Services",
  type: "document",
  icon: HelpCircleIcon,
  fieldsets: [
    { name: 'design', title: 'Design Section' },
    { name: 'location', title: 'Location. Section' },
    { name: 'production', title: 'Production Section' },
    { name: 'concierge', title: 'Concierge. Section' },
    { name: 'activity', title: 'Activity. Section' },
    { name: 'celebrities', title: 'Celebrities. Section' },
    { name: 'music', title: 'Music. Section' },
    { name: 'products', title: 'Products. Section' },
    { name: 'more', title: 'More. Section' },
  ],
  fields: [
    
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // Design Section

    {
      name: 'layout1',
      title: 'Design .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout2,
      fieldset: 'design',
    },
    {
      name: 'layout2',
      title: 'Design .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout1,
      fieldset: 'design',
    },
    
    {
      name: "dlocation",
      title: "Design. Location .Layout A & B",
      type: "string",
      fieldset: 'design',
    },
    {
      name: "dlocationlink",
      title: "Design. Location Link .Layout A & B",
      type: "string",
      fieldset: 'design',
    },

    {
      name: "dcontent2",
      title: "Design. Right Text Content .Layout A & B",
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
      fieldset: 'design',
    }, 
    {
      name: "dcontent",
      title: "Design. Left Text Content .Layout A",
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      hidden: ({parent}) => parent?.layout2,
      fieldset: 'design',
    },
    {
      name: "dimage",
      title: "Design. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      hidden: ({parent}) => parent?.layout2,
      fieldset: 'design',
    },
    {
      name: "dimageLayoutB",
      title: "Design. Right Main Image .Layout B",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      hidden: ({parent}) => parent?.layout1,
      fieldset: 'design',
    },

    {
      name: "dsubLayoutA",
      title: "Design. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout2,
      type: "string",
      fieldset: 'design',
    },
    {
      name: "dsubLayoutB",
      title: "Design. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout1,
      type: "string",
      fieldset: 'design',
    },
 
    // -------
    // Location. Section

    {
      name: 'layout113',
      title: 'Location .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout223,
      fieldset: 'location',
    },
    {
      name: 'layout223',
      title: 'Location .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout113,
      fieldset: 'location',
    },
    {
      name: "lcontent",
      title: "Location. Left Text Content .Layout A",
      hidden: ({parent}) => parent?.layout223,
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      fieldset: 'location',
    },
    {
      name: "lcontent2",
      title: "Location. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout223;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'location',
    },
    {
      name: "llocation",
      title: "Location. Location .Layout A & B",
      type: "string",
      fieldset: 'location',
    },
    {
      name: "llocationlink",
      title: "Location. Location Link .Layout A & B",
      type: "string",
      fieldset: 'location',
    },
    {
      name: "limage",
      title: "Location. Main Image .Layout A",
      hidden: ({parent}) => parent?.layout223,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'location',
    },
    {
      name: "limageLayoutB",
      title: "Location. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout113,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'location',
    },

    {
      name: "lsubLayoutA",
      title: "Location. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout223,
      type: "string",
      fieldset: 'location',
    },
    {
      name: "lsubLayoutB",
      title: "Location. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout113,
      type: "string",
      fieldset: 'location',
    },
    // -------
    // Production Section
    {
      name: 'layout11',
      title: 'Production .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout22,
      fieldset: 'production',
    },
    {
      name: 'layout22',
      title: 'Production .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout11,
      fieldset: 'production',
    },
    {
      name: "prcontent",
      title: "Production Left Text Content .Layout A",
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      hidden: ({parent}) => parent?.layout22,
      fieldset: 'production',
    },
    {
      name: "prcontent2",
      title: "Production Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout22;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'production',
    },
    {
      name: "prlocation",
      title: "Production Location .Layout A & B",
      type: "string",
      fieldset: 'production',
    },
    {
      name: "prlocationlink",
      title: "Production Location Link .Layout A & B",
      type: "string",
      fieldset: 'production',
    },
    {
      name: "primage",
      title: "Production Main Image .Layout A",
      hidden: ({parent}) => parent?.layout22,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'production',
    },
    {
      name: "primageLayoutB",
      title: "Production Main Image .Layout B",
      hidden: ({parent}) => parent?.layout11,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'production',
    },
    {
      name: "prsubLayoutA",
      title: "Production Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout22,
      type: "string",
      fieldset: 'production',
    },
    {
      name: "prsubLayoutB",
      title: "Production Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout11,
      type: "string",
      fieldset: 'production',
    },


    // -------
    // Concierge. Section
    {
      name: 'layout121',
      title: 'Concierge .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout212,
      fieldset: 'concierge',
    },
    {
      name: 'layout212',
      title: 'Concierge .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout121,
      fieldset: 'concierge',
    },
    {
      name: "ccontent",
      title: "Concierge. Left Text Content .Layout A",
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      hidden: ({parent}) => parent?.layout212,
      fieldset: 'concierge',
    },
    {
      name: "ccontent2",
      title: "Concierge. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout212;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'concierge',
    },
    {
      name: "clocation",
      title: "Concierge. Location .Layout A & B",
      type: "string",
      fieldset: 'concierge',
    },
    {
      name: "clocationlink",
      title: "Concierge. Location Link .Layout A & B",
      type: "string",
      fieldset: 'concierge',
    },
    {
      name: "cimage",
      title: "Concierge. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'concierge',
    },
    {
      name: "cimageLayoutB",
      title: "Concierge. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout121,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'concierge',
    },
    {
      name: "csubLayoutA",
      title: "Concierge. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout212,
      type: "string",
      fieldset: 'concierge',
    },
    {
      name: "csubLayoutB",
      title: "Concierge. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout121,
      type: "string",
      fieldset: 'concierge',
    },
    // -------
    // Activity. Section
    {
      name: 'layout4',
      title: 'Activity .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout44,
      fieldset: 'activity',
    },
    {
      name: 'layout44',
      title: 'Activity .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout4,
      fieldset: 'activity',
    },
    {
      name: "acontent",
      title: "Activity. Left Text Content .Layout A",
      hidden: ({parent}) => parent?.layout44,
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      fieldset: 'activity',
    },
    {
      name: "acontent2",
      title: "Activity. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout44;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'activity',
    },
    {
      name: "alocation",
      title: "Activity. Location .Layout A & B",
      type: "string",
      fieldset: 'activity',
    },
    {
      name: "alocationlink",
      title: "Activity. Location Link .Layout A & B",
      type: "string",
      fieldset: 'activity',
    },
    {
      name: "aimage",
      title: "Activity. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'activity',
    },
    {
      name: "aimageLayoutB",
      title: "Activity. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout4,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'activity',
    },
    {
      name: "asubLayoutA",
      title: "Activity. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout44,
      type: "string",
      fieldset: 'activity',
    },
    {
      name: "asubLayoutB",
      title: "Activity. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout4,
      type: "string",
      fieldset: 'activity',
    },
    // -------
    // Celebrities. Section
    {
      name: 'layout5',
      title: 'Celebrities .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout55,
      fieldset: 'celebrities',
    },
    {
      name: 'layout55',
      title: 'Celebrities .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout5,
      fieldset: 'celebrities',
    },
    {
      name: "clcontent",
      title: "Celebrities. Left Text Content .Layout A",
      hidden: ({parent}) => parent?.layout55,
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      fieldset: 'celebrities',
    },
    {
      name: "clcontent2",
      title: "Celebrities. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout55;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'celebrities',
    },
    {
      name: "cllocation",
      title: "Celebrities. Location .Layout A & B",
      type: "string",
      fieldset: 'celebrities',
    },
    {
      name: "cllocationlink",
      title: "Celebrities. Location Link .Layout A & B",
      type: "string",
      fieldset: 'celebrities',
    },
    {
      name: "climage",
      title: "Celebrities. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'celebrities',
    },
    {
      name: "climageLayoutB",
      title: "Celebrities. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout5,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'celebrities',
    },
    {
      name: "clsubLayoutA",
      title: "Celebrities. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout55,
      type: "string",
      fieldset: 'celebrities',
    },
    {
      name: "clsubLayoutB",
      title: "Celebrities. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout5,
      type: "string",
      fieldset: 'celebrities',
    },
    // -------
    // Music. Section
    {
      name: 'layout6',
      title: 'Music .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout66,
      fieldset: 'music',
    },
    {
      name: 'layout66',
      title: 'Music .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout6,
      fieldset: 'music',
    },
    {
      name: "mucontent",
      title: "Music. Left Text Content .Layout A",
      hidden: ({parent}) => parent?.layout66,
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      fieldset: 'music',
    },
    {
      name: "mucontent2",
      title: "Music. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout66;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'music',
    },
    {
      name: "mulocation",
      title: "Music. Location .Layout A & B",
      type: "string",
      fieldset: 'music',
    },
    {
      name: "mulocationlink",
      title: "Music. Location Link .Layout A & B",
      type: "string",
      fieldset: 'music',
    },
    {
      name: "muimage",
      title: "Music. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'music',
    },
    {
      name: "muimageLayoutB",
      title: "Music. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout6,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'music',
    },
    {
      name: "musubLayoutA",
      title: "Music. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout66,
      type: "string",
      fieldset: 'music',
    },
    {
      name: "musubLayoutB",
      title: "Music. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout6,
      type: "string",
      fieldset: 'music',
    },
    // -------
    // Products. Section
    {
      name: 'layout7',
      title: 'Products .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout77,
      fieldset: 'products',
    },
    {
      name: 'layout77',
      title: 'Products .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout7,
      fieldset: 'products',
    },
    {
      name: "pdcontent",
      title: "Products. Left Text Content .Layout A",
      hidden: ({parent}) => parent?.layout77,
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      fieldset: 'products',
    },
    {
      name: "pdcontent2",
      title: "Products. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout77;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'products',
    },
    {
      name: "pdlocation",
      title: "Products. Location .Layout A & B",
      type: "string",
      fieldset: 'products',
    },
    {
      name: "pdlocationlink",
      title: "Products. Location Link .Layout A & B",
      type: "string",
      fieldset: 'products',
    },
    {
      name: "pdimage",
      title: "Products. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'products',
    },
    {
      name: "pdimageLayoutB",
      title: "Products. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout7,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'products',
    },
    {
      name: "pdsubLayoutA",
      title: "Products. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout77,
      type: "string",
      fieldset: 'products',
    },
    {
      name: "pdsubLayoutB",
      title: "Products. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout7,
      type: "string",
      fieldset: 'products',
    },
    // -------
    // More. Section
    {
      name: 'layout8',
      title: 'Location .Layout A Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout A.',
      initialValue: false,
      hidden: ({parent}) => parent?.layout88,
      fieldset: 'more',
    },
    {
      name: 'layout88',
      title: 'Location .Layout B Content Blocks',
      type: 'boolean',
      description: 'Toggle to activate .Layout B. ',
      initialValue: false,
      hidden: ({parent}) => parent?.layout8,
      fieldset: 'more',
    },
    {
      name: "mocontent",
      title: "More. Left Text Content .Layout A",
      hidden: ({parent}) => parent?.layout88,
      type: "blockContent",
         validation: (Rule) =>
                Rule.custom(blocks => {
                  if (!blocks) return true;
                  const text0 = blocks
                    .map(block => block.children.map(child => child.text || '').join(''))
                    .join(' ');
                  const wordCount0 = text0.split(/\s+/).length;
                  return wordCount0 <= 50 || 'Text cannot exceed 50 words.';
                }),
      fieldset: 'more',
    },
    {
      name: "mocontent2",
      title: "More. Right Text Content .Layout A & B",
      type: "blockContent",
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (!blocks) return true;
    
          // Check if layout B is active
          const isLayoutB = context.parent?.layout88;
    
          // Set word limit based on layout
          const maxWords = isLayoutB ? 115 : 50;
    
          const textContent = blocks
            .map(block => block.children.map(child => child.text || '').join(''))
            .join(' ');
    
          const wordCount = textContent.split(/\s+/).length;
          return wordCount <= maxWords || `Text cannot exceed ${maxWords} words.`;
        }),
      fieldset: 'more',
    },
    {
      name: "molocation",
      title: "More. Location .Layout A & B",
      type: "string",
      fieldset: 'more',
    },
    {
      name: "molocationlink",
      title: "More. Location Link .Layout A & B",
      type: "string",
      fieldset: 'more',
    },
    {
      name: "moimage",
      title: "More. Main Image .Layout A",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'more',
    },
    {
      name: "moimageLayoutB",
      title: "More. Right Main Image .Layout B",
      hidden: ({parent}) => parent?.layout8,
      type: "image",
      options: {
        hotspot: true, // Enables hotspot and crop functionality
      },
      fieldset: 'more',
    },
    {
      name: "mosubLayoutA",
      title: "More. Subtitle .Layout A",
      hidden: ({parent}) => parent?.layout88,
      type: "string",
      fieldset: 'more',
    },
    {
      name: "mosubLayoutB",
      title: "More. Subtitle .Layout B",
      hidden: ({parent}) => parent?.layout88,
      type: "string",
      fieldset: 'more',
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

import React from 'react'

const blockConfig = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'H1', value: 'h1' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' },
    { title: 'Quote', value: 'blockquote' },
  ],
  lists: [
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
    ],
    annotations: [
      {
        title: "URL",
        name: "link",
        type: "object",
        fields: [
          {
            title: "URL",
            name: "href",
            type: "url",
            validation: (Rule) =>
              Rule.uri({
                scheme: ["http", "https", "mailto", "tel"],
              }),
          },
        ],
      },
      {
        title: "Internal Link",
        name: "internalLink",
        type: "reference",
        to: [{ type: "project" }],
      },
    ],
  },
};


export default {
  name: 'pressindi',
  title: 'Publications Individual Pages',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },

    {
      name: 'sections',
      title: 'Layout Spreads',
      type: 'array',
      options: {
        insertItem: 'Add a block article?', // Custom text for the add button
      },
      of: [
        
        {
          type: 'object',
          name: 'section',
          fields: [
            // Toggle fields for each layout
            {
              name: 'layout1',
              title: 'Layout 1',
              type: 'boolean',
              description: 'Toggle to activate Layout 1. See here for reference: https://i.ibb.co/HT6GhvV/Whats-App-Image-2024-10-28-at-10-47-57.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout2 || parent?.layout3,
            },
            {
              name: 'layout2',
              title: 'Layout 2',
              type: 'boolean',
              description: 'Toggle to activate Layout 2. See here for reference: https://i.ibb.co/LCr8SzH/Whats-App-Image-2024-10-28-at-10-48-43.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout3,
            },
            {
              name: 'layout3',
              title: 'Layout 3',
              type: 'boolean',
              description: 'Toggle to activate Layout 3. See here for reference: https://i.ibb.co/YXg1PdT/Whats-App-Image-2024-10-28-at-10-48-48.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout2,
            },
       

            // Common fields
            {
              name: 'location',
              title: 'Small Publication, Title',
              type: 'string',
            },
            // {
            //   name: 'locationlink',
            //   title: 'Top Link URL',
            //   type: 'string',
            // },
            

            // Layout 1 Fields (Visible only if Layout 1 is active)
     
 
           
            {
              name: 'mainImage',
              title: 'Layout 1, Large Publication. Logo (png only)',
              type: 'image',
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column4Image',
              title: 'Layout 1, Column 4. Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column0Text',
              title: 'Subtitle',
              type: 'array',
              of: [blockConfig],
              // validation: (Rule) =>
              //   Rule.custom(blocks => {
              //     const text = blocks
              //       .map(block => block.children.map(child => child.text).join(''))
              //       .join(' ');
              //     const wordCount = text.split(/\s+/).length;
              //     return wordCount <= 10 || 'Text cannot exceed 10 words.';
              //   }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column1Text',
              title: 'Layout 1, Column 1. Bodycopy',
              type: 'array',
              of: [blockConfig],
              
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column2Text',
              title: 'Layout 1, Column 2. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column3Text',
              title: 'Layout 1, Column 3. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column4Text',
              title: 'Layout 1, Column 4. Image Title',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },

            {
              name: 'column5Text',
              title: 'Layout 1, Column 5. Image description',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column6Text',
              title: 'Layout 1, Column 6. Subtitle',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column7Text',
              title: 'Layout 1, Column 6. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'layout1date',
              title: 'Layout 1 - Publication date',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout1,
            },



            // Layout 2 Fields (Visible only if Layout 2 is active)
            {
              name: 'layout2Image2',
              title: 'Layout 2, Large Image.',
              type: 'image',
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column4Image',
              title: 'Layout 2, Pressed Flower. (png only)',
              type: 'image',
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column44Image',
              title: 'Layout 2, Small Publication Logo (PNG only)',
              type: 'image',
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column5Image',
              title: 'Layout 2 - Column 5 Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column1Text',
              title: 'Subtitle',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column11Text',
              title: 'Layout 2, Column 1. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column2Text',
              title: 'Layout 2, Column 2. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column3Text',
              title: 'Layout 2, Column 3. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column4Text',
              title: 'Layout 2, Column 4. Image Title',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column44Text',
              title: 'Layout 2, Column 4. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column444Text',
              title: 'Layout 2, Subtitle',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },

            {
              name: 'layout2Column5Text',
              title: 'Layout 2, Column 5. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2date',
              title: 'Layout 2 - Publication date',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout2,
            },

            // Layout 3 Fields (Visible only if Layout 3 is active)
            {
              name: 'layout3Image3_5',
              title: 'Layout 3, Large Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column2Image',
              title: 'Layout 3, Small Publication Logo (PNG only)',
              type: 'image',
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column1Text',
              title: 'Layout 3, Column 1. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column2Text',
              title: 'Layout 3, Column 2. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column23Text',
              title: 'Small Publication Subtitle',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column22Text',
              title: 'Layout 3, Column 2. Bodycopy 2',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column3Text',
              title: 'Layout 3, Column 3. Subtitle',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column33Text',
              title: 'Layout 3, Column 3. Image description.',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column4Text',
              title: 'Layout 3, Column 4. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column5Text',
              title: 'Layout 3, Column 5. Bodycopy',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3date',
              title: 'Layout 3 - Publication date',
              type: 'array',
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
          ],
         preview: {
            select: {
              title: 'location', // Assuming 'location' is a field representing the section's name/title
              layout1Image: 'mainImage',
              layout2Image: 'layout2Image2',
              layout3Image: 'layout3Image3_5',
            },
            prepare(selection) {
              const { title, layout1Image, layout2Image, layout3Image } = selection;

              // Select the image based on the active layout for each section
              const media = layout1Image || layout2Image || layout3Image;

              return {
                title: title || 'Untitled Article',
                media: media,
              };
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      layout1Image: 'sections.0.mainImage',
      layout2Image: 'sections.0.layout2Image2',
      layout3Image: 'sections.0.layout3Image3_5',
    },
    prepare(selection) {
      const { title, layout1Image, layout2Image, layout3Image } = selection;
  
      // Determine which image to show based on active layout
      const media = layout1Image || layout2Image || layout3Image;
  
      return {
        title: title,
        media: media,
      };
    },
  },  
}

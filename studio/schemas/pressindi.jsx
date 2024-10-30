import React from 'react'

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
      title: 'Article Spreads',
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
              description: 'Toggle to activate Layout 1',
              initialValue: false,
              hidden: ({parent}) => parent?.layout2 || parent?.layout3,
            },
            {
              name: 'layout2',
              title: 'Layout 2',
              type: 'boolean',
              description: 'Toggle to activate Layout 2',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout3,
            },
            {
              name: 'layout3',
              title: 'Layout 3',
              type: 'boolean',
              description: 'Toggle to activate Layout 3',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout2,
            },
            // {
            //   name: "layout",
            //   title: "Select Layout",
            //   type: "string",
            //   options: {
            //     list: [
            //       { title: "Layout 1", value: "layout1" },
            //       { title: "Layout 2", value: "layout2" },
            //       { title: "Layout 3", value: "layout3" },
            //     ],
            //     layout: "radio",
            //   },
            //   initialValue: "layout1",
            // },

            // Common fields
            {
              name: 'location',
              title: 'Top Link Text',
              type: 'string',
            },
            {
              name: 'locationlink',
              title: 'Top Link URL',
              type: 'string',
            },

            // Layout 1 Fields (Visible only if Layout 1 is active)
            {
              name: 'mainImage',
              title: 'Layout 1 Main Image (2 Columns)',
              type: 'image',
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column4Image',
              title: 'Layout 1 Column 4 Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column0Text',
              title: 'Subtext (below main image)',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column1Text',
              title: 'Layout 1 Column 1 Text (below main image)',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column2Text',
              title: 'Layout 1 Column 2 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column3Text',
              title: 'Layout 1 Column 3 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column4Text',
              title: 'Layout 1 Column 4 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },

            {
              name: 'column5Text',
              title: 'Layout 1 Column 5 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column6Text',
              title: 'Layout 1 Column 6 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout1,
            },

            // Layout 2 Fields (Visible only if Layout 2 is active)
            {
              name: 'layout2Image2',
              title: 'Layout 2 - Columns 2-3 Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column4Image',
              title: 'Layout 2 - Column 4 Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column44Image',
              title: 'Layout 2 - Column 4 Image',
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
              title: 'Layout 2 - Column 1 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column2Text',
              title: 'Layout 2 - Column 2 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column3Text',
              title: 'Layout 2 - Column 3 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column4Text',
              title: 'Layout 2 - Column 4 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout2,
            },

            {
              name: 'layout2Column5Text',
              title: 'Layout 2 - Column 5 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2date',
              title: 'Layout 2 - Publication date',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout2,
            },

            // Layout 3 Fields (Visible only if Layout 3 is active)
            {
              name: 'layout3Image3_5',
              title: 'Layout 3 - Columns 3-5 Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column2Image',
              title: 'Layout 3 - Column 2 Image',
              type: 'image',
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column1Text',
              title: 'Layout 3 - Column 1 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column2Text',
              title: 'Layout 3 - Column 2 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column22Text',
              title: 'Layout 3 - Column 2 Text 2',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column3Text',
              title: 'Layout 3 - Column 3 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column4Text',
              title: 'Layout 3 - Column 4 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column5Text',
              title: 'Layout 3 - Column 5 Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => !parent?.layout3,
            },
          ],
          preview: {
            select: {
              layout: 'layout',
            },
            prepare({layout}) {
              return {
                title: 'Article',
              }
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      // image: 'mainImage',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        media: image,
      }
    },
  },
}

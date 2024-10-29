import React from "react";

export default {
  name: "pressindi",
  title: "Publications Individual Pages",
  type: "document",
  
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // {
    //   name: "year",
    //   title: "Year",
    //   type: "string",
    // },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    // {
    //   name: "content",
    //   title: "Content",
    //   type: "blockContent",
    // },
    {
      name: "location",
      title: "Top Link Text",
      type: "string",
    },
    {
      name: "locationlink",
      title: "Top Link URL",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Layout 1 Main Image (2 Columns)",
      type: "image",
    },
    {
      name: "column1Text",
      title: "Layout 1 Column 1 Text (below main image)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "column2Text",
      title: "Layout 1 Column 2 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "column3Text",
      title: "Layout 1 Column 3 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "column4Image",
      title: "Layout 1 Column 4 Image",
      type: "image",
    },
    {
      name: "column4Text",
      title: "Layout 1 Column 4 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "column5Text",
      title: "Layout 1 Column 5 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "column6Text",
      title: "Layout 1 Column 6 Text",
      type: "array",
      of: [{ type: "block" }],
    },

    // {
    //   name: "layout2Image1",
    //   title: "Layout 2 - Column 1 Image",
    //   type: "image",
    // },
    {
      name: "layout2Column1Text",
      title: "Layout 2 - Column 1 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout2Image2",
      title: "Layout 2 - Columns 2-3 Image",
      type: "image",
    },
    {
      name: "layout2Column2Text",
      title: "Layout 2 - Column 2 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout2Column3Text",
      title: "Layout 2 - Column 3 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout2Column4Text",
      title: "Layout 2 - Column 4 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout2Column4Image",
      title: "Layout 2 - Column 4 Image",
      type: "image",
    },
    {
      name: "layout2Column44Image",
      title: "Layout 2 - Column 4 Image",
      type: "image",
    },
    {
      name: "layout2Column5Image",
      title: "Layout 2 - Column 5 Image",
      type: "image",
    },
    {
      name: "layout2Column5Text",
      title: "Layout 2 - Column 5 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout2date",
      title: "Layout 2 - Publication date",
      type: "array",
      of: [{ type: "block" }],
    },


    {
      name: "layout3Column1Text",
      title: "Layout 3 - Column 1 Text",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "layout3Column2Text",
      title: "Layout 3 - Column 2 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout3Column2Image",
      title: "Layout 3 - Column 2 Image",
      type: "image",
    },
 
    {
      name: "layout3Column22Text",
      title: "Layout 3 - Column 2 Text 2",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout3Image3_5",
      title: "Layout 3 - Columns 3-5 Image",
      type: "image",
    },
    {
      name: "layout3Column3Text",
      title: "Layout 3 - Column 3 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout3Column4Text",
      title: "Layout 3 - Column 4 Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "layout3Column5Text",
      title: "Layout 3 - Column 5 Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  
  preview: {
    select: {
      title: "title",
      image: "mainImage",
    },
    prepare(selection) {
      const { title, image } = selection;
      return {
        title: title,
        media: image,
      };
    },
  },
};

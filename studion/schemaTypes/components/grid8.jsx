import React from "react";

// import { RiNumber0 } from "react-icons/Ri";
// import { RiNumber1 } from "react-icons/Ri";
// import { RiNumber2 } from "react-icons/Ri";
// import { RiNumber3 } from "react-icons/Ri";
// import { RiNumber4 } from "react-icons/Ri";
// import { RiNumber5 } from "react-icons/Ri";
// import { RiNumber6 } from "react-icons/Ri";
// import { RiNumber7 } from "react-icons/Ri";

export default {
  name: "grid8",
  title: "Grid",
  type: "array",
  liveEdit: true,
  options: {
    layout: "grid",
  },
  of: [
    {
      name: "item",
      title: "Item",
      type: "object",
      fields: [ 
          // SEO fields for each image
          {
            name: 'seoImage', 
            title: 'CLICK HERE FOR SEO KEYWORDS',
            type: 'seo',  // Reusing the `seo` object schema
            // Collapsible section with initial state set to collapsed
            options: {
              collapsible: true,
              collapsed: true,  // Set to `true` to keep it collapsed by default
            },
          },
        {
          name: "image",
          title: "Image",
          type: "image",
          hidden: ({ parent, value }) =>
            (!value && parent?.spacer) || (!value && parent?.video),
        },
      
        {
          name: "imageh",
          title: "Hover Image",
          type: "image",
        },

        {
          name: "title",
          title: "Title",
          type: "string",
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.reference),
        },

        {
          name: "month",
          title: "Sub-title Small",
          type: "string",
        },

        {
          name: "year",
          title: "Sub-title Big",
          type: "string",
        },

        // {
        //   name: "years",
        //   title: "Sub-title Small",
        //   type: "string",
        // },

        // {
        //   name: "yeart",
        //   title: "Sub-title Tiny",
        //   type: "string",
        // }, 
        {
          name: 'filmtitle',
          title: 'Film Title',
          type: 'string',
        },
        {
          name: 'film',
          title: 'Film link',
          type: 'string',
        },
      
        {
          name: "content3",
          title: "Bio",
          type: "blockContent",
        },


       
      ],
      preview: {
        select: {
          spacer: "spacer",
          image: "image",
          video: "video.asset.playbackId",
        },
        prepare(selection) {
          const { image, spacer, video } = selection;
          let media;
          if (video) {
            media = (
              <img
                src={`https://image.mux.com/${video}/animated.gif`}
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
            media: video
              ? media
              : image
              ? media
              : spacer,
          };
        },
      },
    },
  ],
};

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
  name: "grid",
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
        {
          name: "image",
          title: "Arch Image PNG",
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
          name: "portrait",
          title: "portrait img",
          type: "boolean",
          description: "Is the hover img portrait?",
        },

  
        {
          name: "reference",
          title: "Reference",
          type: "reference", 
          to: {
            type: "project",
          },
          validation: (Rule) => Rule.required().error('required'), 
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.link),
        },
        // {
        //   name: "double",
        //   title: "Double",
        //   type: "boolean",
        // },
        {
          name: "title",
          title: "Title",
          type: "string",
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.reference),
        },

        {
          name: "year",
          title: "Year",
          type: "string",
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
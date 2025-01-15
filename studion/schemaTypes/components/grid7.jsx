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
  name: "grid7",
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
                name: 'teamimg',
                title: 'Team Image',
                type: 'boolean',
                description:
                  'Toggle if on last Image to set team group image',
                initialValue: false,
                // hidden: ({parent}) => parent?.layout2 ,
              },
        {
          name: "image",
          title: "Person Image",
          type: "image",
   
        },
      
        {
          name: "imageh",
          title: "Hover Image",
          type: "image",
          hidden: ({parent}) => parent?.teamimg ,
        },

       


   
        {
          name: "title",
          title: "Person Name",
          type: "string",
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.reference),
        },

        {
          name: "month",
          title: "Person Role",
          type: "string",
          hidden: ({parent}) => parent?.teamimg ,
        },

        {
          name: "year",
          title: "Person Role Sub-title",
          type: "string",
      
        },
        {
          name: "content3",
          title: "Person Bio",
          type: "blockContent",
        },
        {
          name: "content4",
          title: "Person Email",
          type: "blockContent",
          hidden: ({parent}) => parent?.teamimg ,
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

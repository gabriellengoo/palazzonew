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
  name: "gridpress",
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
          title: "Images for gallery",
          type: "image",
          hidden: ({ parent, value }) =>
            (!value && parent?.spacer) || (!value && parent?.video),
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

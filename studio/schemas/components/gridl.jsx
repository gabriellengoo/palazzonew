import React from "react";

import { RiNumber0 } from "react-icons/Ri";
import { RiNumber1 } from "react-icons/Ri";
import { RiNumber2 } from "react-icons/Ri";
import { RiNumber3 } from "react-icons/Ri";
import { RiNumber4 } from "react-icons/Ri";
import { RiNumber5 } from "react-icons/Ri";
import { RiNumber6 } from "react-icons/Ri";
import { RiNumber7 } from "react-icons/Ri";

export default {
  name: "gridl",
  title: "Gridl",
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
          title: "Image",
          type: "image",
          hidden: ({ parent, value }) =>
            (!value && parent?.spacer) || (!value && parent?.video),
        },
        {
          name: "video",
          title: "Video",
          type: "mux.video",
          hidden: ({ parent, value }) =>
            (!value && parent?.spacer) || (!value && parent?.image),
        },
        {
          name: 'youtubeUrl',
          title: 'YouTube Video URL',
          type: 'url',
        },
        {
          name: 'vimeoUrl',
          title: 'Vimeo Video URL',
          type: 'url',
        },
        {
          name: "reference",
          title: "Reference",
          type: "reference",
          to: {
            type: "project",
          },
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.link),
        },
        {
          name: "double",
          title: "Double",
          type: "boolean",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          hidden: ({ parent, value }) =>
            !value && (parent?.spacer || parent?.reference),
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

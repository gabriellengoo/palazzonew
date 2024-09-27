import React from "react";
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;


export default {
  name: "services", 
  title: "Services Page",
  type: "document",
  // liveEdit: true,
  // icon: Project,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: { source: "title" },
    // },
    {
      name: "dcontent",
      title: "Design Left Text Content",
      type: "blockContent",
    },
    {
      name: "dcontent2",
      title: "Design Right Text Content",
      type: "blockContent",
    },
    {
      name: "dlocation",
      title: "Design Location",
      type: "string",
    },
    {
      name: "dlocationlink",
      title: "Design Location Link",
      type: "string",
    },
    {
      name: "dimage",
      title: "Design Main image",
      type: "image",
    },
// -------
    {
      name: "lcontent",
      title: "Location Left Text Content",
      type: "blockContent",
    },
    {
      name: "lcontent2",
      title: "Location Right Text Content",
      type: "blockContent",
    },
    {
      name: "llocation",
      title: "Location Location",
      type: "string",
    },
    {
      name: "llocationlink",
      title: "Location Location Link",
      type: "string",
    },
    {
      name: "limage",
      title: "Location Main image",
      type: "image",
    },
    // -------
    {
      name: "prcontent",
      title: "Production Left Text Content",
      type: "blockContent",
    },
    {
      name: "prcontent2",
      title: "Production Right Text Content",
      type: "blockContent",
    },
    {
      name: "prlocation",
      title: "Production Location",
      type: "string",
    },
    {
      name: "prlocationlink",
      title: "Production Location Link",
      type: "string",
    },
    {
      name: "primage",
      title: "Production Main image",
      type: "image",
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
        // media = document.createElement("img");
        // media.src = `https://image.mux.com/${video}/animated.gif`;
        // media.style.objectFit = "cover";
        // media.style.height = "100%";
        // media.style.width = "100%";
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

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
      
    
    // -------
       {
        name: "ccontent",
        title: "Concirerge Left Text Content",
        type: "blockContent",
      },
      {
        name: "ccontent2",
        title: "Concirerge Right Text Content",
        type: "blockContent",
      },
      {
        name: "clocation",
        title: "Concirerge Location",
        type: "string",
      },
      {
        name: "clocationlink",
        title: "Concirerge Location Link",
        type: "string",
      },
      {
        name: "cimage",
        title: "Concirerge Main image",
        type: "image",
      },
         // -------
    {
      name: "acontent",
      title: "Activity Left Text Content",
      type: "blockContent",
    },
    {
      name: "acontent2",
      title: "Activity Right Text Content",
      type: "blockContent",
    },
    {
      name: "alocation",
      title: "Activity Location",
      type: "string",
    },
    {
      name: "alocationlink",
      title: "Activity Location Link",
      type: "string",
    },
    {
      name: "aimage",
      title: "Activity Main image",
      type: "image",
    },
       // -------
       {
        name: "clcontent",
        title: "Celebrities Left Text Content",
        type: "blockContent",
      },
      {
        name: "clcontent2",
        title: "Celebrities Right Text Content",
        type: "blockContent",
      },
      {
        name: "cllocation",
        title: "Celebrities Location",
        type: "string",
      },
      {
        name: "cllocationlink",
        title: "Celebrities Location Link",
        type: "string",
      },
      {
        name: "climage",
        title: "Celebrities Main image",
        type: "image",
      },
         // -------
    {
      name: "mucontent",
      title: "Music Left Text Content",
      type: "blockContent",
    },
    {
      name: "mucontent2",
      title: "Music Right Text Content",
      type: "blockContent",
    },
    {
      name: "mulocation",
      title: "Music Location",
      type: "string",
    },
    {
      name: "mulocationlink",
      title: "Music Location Link",
      type: "string",
    },
    {
      name: "muimage",
      title: "Music Main image",
      type: "image",
    },
       // -------
       {
        name: "pdcontent",
        title: "Products Left Text Content",
        type: "blockContent",
      },
      {
        name: "pdcontent2",
        title: "Products Right Text Content",
        type: "blockContent",
      },
      {
        name: "pdlocation",
        title: "Products Location",
        type: "string",
      },
      {
        name: "pdlocationlink",
        title: "Products Location Link",
        type: "string",
      },
      {
        name: "pdimage",
        title: "Products Main image",
        type: "image",
      },
         // -------
    {
      name: "mocontent",
      title: "More Left Text Content",
      type: "blockContent",
    },
    {
      name: "mocontent2",
      title: "More Right Text Content",
      type: "blockContent",
    },
    {
      name: "molocation",
      title: "More Location",
      type: "string",
    },
    {
      name: "molocationlink",
      title: "More Location Link",
      type: "string",
    },
    {
      name: "moimage",
      title: "More Main image",
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

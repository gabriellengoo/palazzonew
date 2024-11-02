import React from "react";
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;

export default {
  name: "services", 
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // Design Section
    {
      name: "dcontent",
      title: "Design Left Text Content Layout A",
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
      title: "Design Main Image Layout A",
      type: "image",
    },
    {
      name: "dimageLayoutB",
      title: "Design Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Location Section
    {
      name: "lcontent",
      title: "Location Left Text Content Layout A",
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
      title: "Location Main Image",
      type: "image",
    },
    {
      name: "limageLayoutB",
      title: "Location Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Production Section
    {
      name: "prcontent",
      title: "Production Left Text Content Layout A",
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
      title: "Production Main Image",
      type: "image",
    },
    {
      name: "primageLayoutB",
      title: "Production Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Concierge Section
    {
      name: "ccontent",
      title: "Concierge Left Text Content Layout A",
      type: "blockContent",
    },
    {
      name: "ccontent2",
      title: "Concierge Right Text Content",
      type: "blockContent",
    },
    {
      name: "clocation",
      title: "Concierge Location",
      type: "string",
    },
    {
      name: "clocationlink",
      title: "Concierge Location Link",
      type: "string",
    },
    {
      name: "cimage",
      title: "Concierge Main Image",
      type: "image",
    },
    {
      name: "cimageLayoutB",
      title: "Concierge Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Activity Section
    {
      name: "acontent",
      title: "Activity Left Text Content Layout A",
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
      title: "Activity Main Image",
      type: "image",
    },
    {
      name: "aimageLayoutB",
      title: "Activity Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Celebrities Section
    {
      name: "clcontent",
      title: "Celebrities Left Text Content Layout A",
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
      title: "Celebrities Main Image",
      type: "image",
    },
    {
      name: "climageLayoutB",
      title: "Celebrities Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Music Section
    {
      name: "mucontent",
      title: "Music Left Text Content Layout A",
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
      title: "Music Main Image",
      type: "image",
    },
    {
      name: "muimageLayoutB",
      title: "Music Right Main Image Layout B",
      type: "image",
    },
    // -------
    // Products Section
    {
      name: "pdcontent",
      title: "Products Left Text Content Layout A",
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
      title: "Products Main Image",
      type: "image",
    },
    {
      name: "pdimageLayoutB",
      title: "Products Right Main Image Layout B",
      type: "image",
    },
    // -------
    // More Section
    {
      name: "mocontent",
      title: "More Left Text Content Layout A",
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
      title: "More Main Image",
      type: "image",
    },
    {
      name: "moimageLayoutB",
      title: "More Right Main Image Layout B",
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

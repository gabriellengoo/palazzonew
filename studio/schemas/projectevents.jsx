import React from "react";
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;


export default {
  name: "projectevents",
  title: "Events Individual Pages",
  type: "document",
  // liveEdit: true,
  // icon: Project, 
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },

    
    // {
    //   name: "filmtype",
    //   title: "Feature film or Short film",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Feature film", value: "feature" },
    //       { title: "Short film", value: "short" }
    //     ]
    //   }
    // },
    // {
    //   name: "inproduction",
    //   title: "In production?",
    //   type: "boolean",
    // },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "locationlink",
      title: "Location Link",
      type: "string",
    },
    // {
    //   name: "meta",
    //   title: "Meta",
    //   type: "array",
    //   options: {
    //     modal: "popover",
    //   },
    //   of: [
    //     {
    //       name: "meta",
    //       title: "Meta",
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           title: "Title",
    //           type: "string",
    //         },
    //         {
    //           name: "content",
    //           title: "Content",
    //           type: "string",
    //         },
    //         {
    //           name: "link",
    //           title: "Hyperlink Url",
    //           type: "string",
    //         },
    //         // {
    //         //   name: "content",
    //         //   title: "Content",
    //         //   type: "blockContent",
    //         // },
    //       ],
    //       preview: {
    //         select: {
    //           title: "content",
    //           subtitle: "title",
    //         },
    //       },
    //     },
    //   ], 
    // }, 

    {
      name: "image",
      title: "Arch image",
      type: "image",
    },

    {
      name: "slider",
      title: "Slider",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          name: "slide",
          title: "Slide",
          type: "object", 
          fields: [
            // {
            //   name: "fullWidth",
            //   title: "Full Width",
            //   type: "boolean",
            //   description: "Make full width on mobile",
            // },
          
            {
              name: "images",
              title: "Images",
              type: "array",
              options: {
                layout: "grid",
              },
              of: [
                {
                  name: "imageObject",
                  title: "Image",
                  type: "object",
                  fields: [
                    {
                      name: "newDay",
                      title: "Create title Divider",
                      description: "Toggle this is you want to add a title divider",
                      type: "boolean",
                    },
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      hidden: ({ parent }) => parent?.newDay,
                    },
                    {
                      name: "portrait",
                      title: "portrait img",
                      type: "boolean",
                      description: "Is the img portrait?",
                      hidden: ({ parent }) => parent?.newDay,
                    },
                    {
                      name: "day",
                      title: "Day",
                      type: "string",
                      hidden: ({ parent }) => parent?.newDay,
                      description: "Is the image from day 1, 2, 3, or 4?",
                      options: {
                        list: [
                          { title: "Day 1", value: "Day 1" },
                          { title: "Day 2", value: "Day 2" },
                          { title: "Day 3", value: "Day 3" },
                          { title: "Day 4", value: "Day 4" }
                        ],
                        layout: "radio" ,
                        // validation: (Rule) => Rule.required().error("Please select a day.") 
                        // optional, for radio button layout
                      }
          },
                
        
          {
            name: "newDayImage",
            title: "Divider Image",
            type: "image",
            hidden: ({ parent }) => !parent?.newDay, // Hide if newDay is false
          },
          {
            name: "newDayText",
            title: "Divider Text",
            type: "string",
            hidden: ({ parent }) => !parent?.newDay, // Hide if newDay is false
          },
                    // {
                    //   name: "video",
                    //   title: "Video",
                    //   type: "mux.video",
                    //   hidden: ({ parent, value }) =>
                    //     (!value && parent?.spacer) || (!value && parent?.image),
                    // },
                    // {
                    //   name: 'youtubeUrl',
                    //   title: 'YouTube Video URL',
                    //   type: 'url',
                    // },
                    // {
                    //   name: 'vimeoUrl',
                    //   title: 'Vimeo Video URL',
                    //   type: 'url',
                    // },
                    // {
                    //   name: "thumbnailTime",
                    //   title: "Thumbnail Time",
                    //   type: "number",
                    //   description: "Time in seconds for the selected thumbnail frame",
                    //   validation: (Rule) => Rule.min(0),
                    //   // inputComponent: CustomThumbnailTimeInput,
                    // },

                  ],


                  preview: {
                    select: {
                      spacer: 'spacer',
                      image: 'image',
                      video: 'video.asset.playbackId',
                      thumbnailTime: 'thumbnailTime',
                      newDayImage: 'newDayImage',
                    },
                    prepare(selection) {
                      const {image, spacer, video, thumbnailTime, newDayImage} = selection
                      let media
                      if (newDayImage) {
                        // media = newDayImage;
                        media = (
                          <img
                          src="/static/blue.png"
                          style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                          }}
                        />
                        )
                      } else if (video) {
                        media = (
                          <img
                            src={`https://image.mux.com/${video}/animated.gif?start=${thumbnailTime || 0}`}
                            style={{
                              objectFit: 'cover',
                              height: '100%',
                              width: '100%',
                            }}
                          />
                        )
                      } else if (image) {
                        media = image
                      }
                      return {
                        media: video ? media : image ? media : spacer ? media : newDayImage 
                      }
                   
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              image: 'images.0.image',
              video: 'images.0.video.asset.playbackId',
              thumbnailTime: 'images.0.thumbnailTime',
              newDayImage: 'images.0.newDayImage',
            },
            prepare(selection) {
              const {image, video, thumbnailTime, newDayImage} = selection
              let media
              if (newDayImage) {
                // media = newDayImage
                media = (
                  <img
                    src="/static/blue.png"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                )
              }
              else if (video) {
              } 
              else if (image) {
                media = image
              }
              return {
                media: media,
              }
            },
          },


        },
      ],
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

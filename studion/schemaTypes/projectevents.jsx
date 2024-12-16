import React from "react";
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;
import {AddIcon} from '@sanity/icons'

export default {
  name: "projectevents",
  title: "Events Individual Pages",
  type: "document",
  icon: AddIcon,
  // liveEdit: true,
  // icon: Project, 
  fields: [
    {
      name: 'seo',
      title: 'CLICK HERE FOR SEO METADATA',
      type: 'seo',  // Reusing the `seo` object schema
      // Collapsible section with initial state set to collapsed
      options: {
        collapsible: true,
        collapsed: true,  // Set to `true` to keep it collapsed by default
      },
    },
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
              title: "Content",
              type: "array",
              options: {
                layout: "grid",
              },
              of: [
                
                {
                  name: 'imageObject',
                  title: 'Image',
                  type: 'object',
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
                hidden: ({parent}) => parent?.newDay,
              },
                    {
                      name: 'newDay',
                      title: 'Create title Divider',
                      description: 'Toggle this is you want to add a title divider',
                      type: 'boolean',
                      hidden: ({parent}) => parent?.newVideo,
                    },
                    {
                      name: 'newVideo',
                      title: 'Add Video',
                      description: 'Toggle this is you want to add a video',
                      type: 'boolean',
                      hidden: ({parent}) => parent?.newDay,
                    },
                    {
                      name: 'vimeoUrl',
                      title: 'Vimeo Video URL',
                      type: 'url',
                      hidden: ({parent}) => !parent?.newVideo,
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      hidden: ({parent}) => parent?.newDay,
                      hidden: ({parent}) => parent?.newVideo,
                    },
                    {
                      name: 'portrait',
                      title: 'Portrait img',
                      type: 'boolean',
                      description: 'Is the img portrait?',
                      hidden: ({parent}) => parent?.newDay,
                      hidden: ({parent}) => parent?.newVideo,
                    },

                    {
                      name: 'newDayImage',
                      title: 'Divider Image',
                      type: 'image',
                      hidden: ({parent}) => !parent?.newDay, // Hide if newDay is false
                      hidden: ({parent}) => parent?.newVideo,
                    },
                    {
                      name: 'newDayText',
                      title: 'Divider Text',
                      type: 'string',
                      hidden: ({parent}) => !parent?.newDay, // Hide if newDay is false
                      hidden: ({parent}) => parent?.newVideo,
                    },
                    {
                      name: 'day',
                      title: 'Day',
                      type: 'string',
                      hidden: ({parent}) => parent?.newDay,
                      hidden: ({parent}) => parent?.newVideo,
                      description: 'Is the image from day 1, 2, 3, or 4?',
                      options: {
                        list: [
                          {title: 'Day 1', value: 'Day 1'},
                          {title: 'Day 2', value: 'Day 2'},
                          {title: 'Day 3', value: 'Day 3'},
                          {title: 'Day 4', value: 'Day 4'},
                        ],
                        layout: 'radio', // optional, for radio button layout
                      },
                      // validation: (Rule) => Rule.required().error("Please select a day.")
                      // initialValue: "Day not provided"
                    },
                
                  ],
                  preview: {
                    select: {
                      spacer: 'spacer',
                      image: 'image',
                      video: 'video.asset.playbackId',
                      thumbnailTime: 'thumbnailTime',
                      newDayImage: 'newDayImage',
                      vimeoUrl: 'vimeoUrl',
             
                    },
                    prepare(selection) {
                      const {image, spacer, video, thumbnailTime, newDayImage, vimeoUrl} = selection
                      let media
                      if (vimeoUrl) {
                        return {
                          media: (
                            <iframe
                              frameBorder="0"
                              src={`${vimeoUrl}?autoplay=1&loop=1&autopause=0&muted=1&background=1`}
                              style={{
                             
                                height: '100%',
                                border: 'none',
                                pointerEvents: 'none',
                              }}
                              title="Vimeo Video"
                            />
                          ),
                          title: 'Video Preview',
                        }
                      } else if (newDayImage) {
                        // media = newDayImage;
                        media = (
                          <img
                            src="/static/pink.png"
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
                        media: video ? media : image ? media : spacer ? media : newDayImage,
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
              vimeoUrl: 'images.0.vimeoUrl',
            },
            prepare(selection) {
              const {image, video, thumbnailTime, vimeoUrl, newDayImage} = selection
              let media
              if (vimeoUrl) {
                return {
                  media: (
                    <iframe
                      frameBorder="0"
                      src={`${vimeoUrl}?autoplay=1&loop=1&autopause=0&muted=1&background=1`}
                      style={{
                        
                        height: '100%',
                        border: 'none',
                        pointerEvents: 'none',
                      }}
                      title="Vimeo Video"
                    />
                  ),
              
                }
              } 

              else if (newDayImage) {
                // media = newDayImage
                media = (
                  <img
                    src="/static/pink.png"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                )
              } else if (video) {
              } else if (image) {
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
      title: 'title',
      subtitle: 'client.0.label',
      image: 'slider.0.images.0.image',
      video: 'slider.0.images.0.video.asset.playbackId',
      thumbnailTime: 'slider.0.images.0.thumbnailTime',
      vimeoUrl: 'slider.0.images.0.vimeoUrl',
    },
    prepare(selection) {
      const {image, title, video, subtitle, thumbnailTime, vimeoUrl} = selection
      let media
      if (vimeoUrl) {
        return {
          media: (
            <iframe
              frameBorder="0"
              src={`${vimeoUrl}?autoplay=1&loop=1&autopause=0&muted=1&background=1`}
              style={{
               
                height: '100%',
                border: 'none',
                pointerEvents: 'none',
              }}
              title="Vimeo Video"
            />
          ),
          title: title,
        }
      } 
      else if (video) {
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
        title: title,
        subtitle: subtitle,
        media: media,
      }
    },
  },
}
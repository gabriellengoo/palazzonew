import React from 'react'
// import Emoji from "a11y-react-emoji";
// const Project = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;

export default {
  name: 'project',
  title: 'Weddings Individual Pages',
  type: 'document',
  // liveEdit: true,
  // icon: Project,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'locationlink',
      title: 'Location Link',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Arch image',
      type: 'image',
    },

    {
      name: 'slider',
      title: 'Slider',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'slide',
          title: 'Slide',
          type: 'object',
          fields: [
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              options: {
                layout: 'grid',
              },
              of: [
                {
                  name: 'imageObject',
                  title: 'Image',
                  type: 'object',
                  fields: [
                    {
                      name: 'newDay',
                      title: 'Create title Divider',
                      description: 'Toggle this is you want to add a title divider',
                      type: 'boolean',
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      hidden: ({parent}) => parent?.newDay,
                    },
                    {
                      name: 'portrait',
                      title: 'portrait img',
                      type: 'boolean',
                      description: 'Is the img portrait?',
                      hidden: ({parent}) => parent?.newDay,
                    },

                    {
                      name: 'newDayImage',
                      title: 'Divider Image',
                      type: 'image',
                      hidden: ({parent}) => !parent?.newDay, // Hide if newDay is false
                    },
                    {
                      name: 'newDayText',
                      title: 'Divider Text',
                      type: 'string',
                      hidden: ({parent}) => !parent?.newDay, // Hide if newDay is false
                    },
                    {
                      name: 'day',
                      title: 'Day',
                      type: 'string',
                      hidden: ({parent}) => parent?.newDay,
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
                    },
                    prepare(selection) {
                      const {image, spacer, video, thumbnailTime, newDayImage} = selection
                      let media
                      if (newDayImage) {
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
                    src="/static/pink.png"
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
      title: 'title',
      subtitle: 'client.0.label',
      image: 'slider.0.images.0.image',
      video: 'slider.0.images.0.video.asset.playbackId',
      thumbnailTime: 'slider.0.images.0.thumbnailTime',
    },
    prepare(selection) {
      const {image, title, video, subtitle, thumbnailTime} = selection
      let media
      if (video) {
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

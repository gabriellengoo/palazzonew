import React from 'react'
import {AddIcon} from '@sanity/icons'

export default {
  name: 'project',
  title: 'Weddings Individual Pages',
  type: 'document',
  icon: AddIcon,
  // icon: '🏠',
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
      title: 'Video Text',
      type: 'string',
    },
    {
      name: 'locationlink',
      title: 'Video Link',
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
              title: 'Content',
              type: 'array',
              options: {
                layout: 'grid',
              },
              // https://vimeo.com/966622577 https://player.vimeo.com/video/966622577?h=ec87c2def5
              // https://player.vimeo.com/video/721799699?h=b659979974?background=1&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
              of: [
                  // SEO fields for each image
             
                {
                  name: 'imageObject',
                  title: 'Image',
                  type: 'object',
                  fields: [
                    {
                      name: 'seoImage',
                      title: 'CLICK HERE FOR SEO KEYWORDS',
                      type: 'seoImage',  // Reusing the `seo` object schema
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
                        // Ensure the vimeoUrl contains the base Vimeo link and append start time if provided
                        const videoId = vimeoUrl.split('/').pop(); // Extract the video ID
                        const startTime = thumbnailTime ? `?t=${thumbnailTime}s` : ''; // Add start time if available
                        const videoEmbedUrl = `https://player.vimeo.com/video/${videoId}${startTime}?autoplay=1&loop=1&autopause=0&muted=1&background=1`; // Construct the embed URL
                  
                        return {
                          media: (
                            <iframe
                            frameBorder="0"
                            src={videoEmbedUrl}
                            style={{
                              height: '100%',
                              width: '100%',
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
                            src="/static/white.png"
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
              const { image, video, thumbnailTime, vimeoUrl, newDayImage } = selection;
              let media;
          
              if (vimeoUrl) {
                // Ensure the vimeoUrl contains the base Vimeo link and append start time if provided
                const videoId = vimeoUrl.split('/').pop(); // Extract the video ID
                const startTime = thumbnailTime ? `?t=${thumbnailTime}s` : ''; // Add start time if available
                const videoEmbedUrl = `https://player.vimeo.com/video/${videoId}${startTime}?autoplay=1&loop=1&autopause=0&muted=1&background=1`; // Construct the embed URL
          
                return {
                  media: (
                    <iframe
                      frameBorder="0"
                      src={videoEmbedUrl}
                      style={{
                        height: '100%',
                        width: '100%',
                        border: 'none',
                        pointerEvents: 'none',
                      }}
                      title="Vimeo Video"
                    />
                  ),
                  title: 'Video Preview',
                };
              } else if (newDayImage) {
                // Fallback image if newDayImage is provided
                media = (
                  <img
                    src="/static/white.png"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                );
              } else if (video) {
                // Mux animated GIF if video is provided
                media = (
                  <img
                    src={`https://image.mux.com/${video}/animated.gif?start=${thumbnailTime || 0}`}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                );
              } else if (image) {
                // Default image if no video or newDayImage is available
                media = image;
              }
          
              return {
                media: media,
              };
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
        // Ensure the vimeoUrl contains the base Vimeo link and append start time if provided
        const videoId = vimeoUrl.split('/').pop(); // Extract the video ID
        const startTime = thumbnailTime ? `?t=${thumbnailTime}s` : ''; // Add start time if available
        const videoEmbedUrl = `https://player.vimeo.com/video/${videoId}${startTime}?autoplay=1&loop=1&autopause=0&muted=1&background=1`; // Construct the embed URL
  
        return {
          media: (
            <iframe
            frameBorder="0"
            src={videoEmbedUrl}
            style={{
              height: '100%',
              width: '100%',
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

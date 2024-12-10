import React from 'react'
import {AddIcon} from '@sanity/icons'

const blockConfig = {
  type: 'block',
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'H1', value: 'h1'},
    {title: 'H2', value: 'h2'},
    {title: 'H3', value: 'h3'},
    {title: 'Quote', value: 'blockquote'},
  ],
  lists: [
    {title: 'Bullet', value: 'bullet'},
    {title: 'Numbered', value: 'number'},
  ],
  marks: {
    decorators: [{title: 'Strong', value: 'strong'}],
    annotations: [
      {
        title: 'URL',
        name: 'link',
        type: 'object',
        fields: [
          {
            title: 'URL',
            name: 'href',
            type: 'url',
            validation: (Rule) =>
              Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
          },
        ],
      },
      {
        title: 'Internal Link',
        name: 'internalLink',
        type: 'reference',
        to: [{type: 'project'}],
      },
    ],
  },
}

export default {
  name: 'pressindi',
  title: 'Publications Individual Pages',
  type: 'document',
  icon: AddIcon,

  fields: [
    {
      name: 'seo',
      title: 'Click here for SEO Metadata',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },



    {
      name: 'sections',
      title: 'Layout Spreads',
      type: 'array',
      options: {
        insertItem: 'Add a block article?', // Custom text for the add button
      },
      of: [
        {
          type: 'object',
          name: 'section',
          fields: [
            // Toggle fields for each layout
            {
              name: 'layout1',
              title: 'Layout 1',
              type: 'boolean',
              description:
                'Toggle to activate Layout 1. See here for reference: https://i.ibb.co/HT6GhvV/Whats-App-Image-2024-10-28-at-10-47-57.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout2 || parent?.layout3 || parent?.layout4 ||  parent?.layout5,
            },
            {
              name: 'layout2',
              title: 'Layout 2',
              type: 'boolean',
              description:
                'Toggle to activate Layout 2. See here for reference: https://i.ibb.co/LCr8SzH/Whats-App-Image-2024-10-28-at-10-48-43.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout3 || parent?.layout4 ||  parent?.layout5,
            },
            {
              name: 'layout3',
              title: 'Layout 3',
              type: 'boolean',
              description:
                'Toggle to activate Layout 3. See here for reference: https://i.ibb.co/YXg1PdT/Whats-App-Image-2024-10-28-at-10-48-48.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout2 || parent?.layout4 ||  parent?.layout5,
            },
            {
              name: 'layout4',
              title: 'Layout 4',
              type: 'boolean',
              description:
                'Toggle to activate Layout 4. See here for reference: https://i.ibb.co/YXg1PdT/Whats-App-Image-2024-10-28-at-10-48-48.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout2 || parent?.layout3 ||  parent?.layout5,
            },

            {
              name: 'layout5',
              title: 'Layout 5',
              type: 'boolean',
              description:
                'Toggle to activate Layout 5. See here for reference: https://i.ibb.co/YXg1PdT/Whats-App-Image-2024-10-28-at-10-48-48.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout2 || parent?.layout3 ||  parent?.layout4,
            },

            {
              name: 'layout6',
              title: 'Layout 6',
              type: 'boolean',
              description:
                'Toggle to activate Layout 6. See here for reference: https://i.ibb.co/YXg1PdT/Whats-App-Image-2024-10-28-at-10-48-48.jpg',
              initialValue: false,
              hidden: ({parent}) => parent?.layout1 || parent?.layout2 || parent?.layout3 ||  parent?.layout5,
            },

            // Common fields
            {
              name: 'location',
              title: 'Small Publication, Title',
              type: 'string',
            },
            // {
            //   name: 'locationlink',
            //   title: 'Top Link URL',
            //   type: 'string',
            // },

            // Layout 1 Fields (Visible only if Layout 1 is active)

            {
              name: 'slider1',
              title: 'Image overlay',
              type: 'array',
              description: 'Display a maximum of 2 Images and 1 PNG Collage ',
              options: {
                layout: 'grid',
              },
              hidden: ({parent}) => !parent?.layout1,
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
                        layout: 'gridpress',
                      },
                      of: [
                        {
                          name: 'imageObject',
                          title: 'Image',
                          type: 'object',
                          fields: [
                            {
                              name: 'image',
                              title: 'Image',
                              type: 'image',
                              hidden: ({parent}) => parent?.newDay,
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

            {
              name: 'mainImage',
              title: 'Layout 1, Large Publication. Logo (png only)',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout1,
            },

            {
              name: 'column0Text',
              title: 'Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text0 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount0 = text0.split(/\s+/).length
                  return wordCount0 <= 10 || 'Text cannot exceed 10 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column1Text',
              title: 'Layout 1, Column 1. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true // Skip validation if blocks is undefined
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 60 || 'Text cannot exceed 60 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column2Text',
              title: 'Layout 1, Column 2. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 60 || 'Text cannot exceed 60 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column3Text',
              title: 'Layout 1, Column 3. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text3 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount3 = text3.split(/\s+/).length
                  return wordCount3 <= 110 || 'Text cannot exceed 110 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column4Text',
              title: 'Layout 1, Column 4. Image Title',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 20 || 'Text cannot exceed 20 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column4Image',
              title: 'Layout 1, Column 4. Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout1,
            },

            {
              name: 'column5Text',
              title: 'Layout 1, Column 5. Image description',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text5 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount5 = text5.split(/\s+/).length
                  return wordCount5 <= 6 || 'Text cannot exceed 6 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },

            {
              name: 'column6Text',
              title: 'Layout 1, Column 6. Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text6 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount6 = text6.split(/\s+/).length
                  return wordCount6 <= 10 || 'Text cannot exceed 10 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'column7Text',
              title: 'Layout 1, Column 6. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text7 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount7 = text7.split(/\s+/).length
                  return wordCount7 <= 85 || 'Text cannot exceed 85 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },
            {
              name: 'layout1date',
              title: 'Layout 1 - Publication date',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text8 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount8 = text8.split(/\s+/).length
                  return wordCount8 <= 3 || 'Text cannot exceed 3 words.'
                }),
              hidden: ({parent}) => !parent?.layout1,
            },

            // Layout 2 Fields (Visible only if Layout 2 is active)

            {
              name: 'slider2',
              title: 'Image overlay',
              type: 'array',
              options: {
                layout: 'grid',
              },
              description: 'Display a maximum of 1 Image and 1 PNG Collage ',
              hidden: ({parent}) => !parent?.layout2,
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
                        layout: 'gridpress',
                      },
                      of: [
                        {
                          name: 'imageObject',
                          title: 'Image',
                          type: 'object',
                          fields: [
                            {
                              name: 'image',
                              title: 'Image',
                              type: 'image',
                              hidden: ({parent}) => parent?.newDay,
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

            {
              name: 'layout2Column1Text',
              title: 'Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 10 || 'Text cannot exceed 10 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column11Text',
              title: 'Layout 2, Column 1. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 70 || 'Text cannot exceed 70 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Image2',
              title: 'Layout 2, Large Image.',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column2Text',
              title: 'Layout 2, Column 2. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 50 || 'Text cannot exceed 50 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column3Text',
              title: 'Layout 2, Column 3. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 55 || 'Text cannot exceed 55 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column4Text',
              title: 'Layout 2, Column 4. Image Title',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 20 || 'Text cannot exceed 20 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },

            {
              name: 'layout2Column44Text',
              title: 'Layout 2, Column 4. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 25 || 'Text cannot exceed 25 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },

            {
              name: 'layout2Column4Image',
              title: 'Layout 2, Column 4. Flower (PNG only)',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },

              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column444Text',
              title: 'Layout 2, Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 10 || 'Text cannot exceed 10 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column44Image',
              title: 'Layout 2, Small Publication Logo (PNG only)',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },

              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2Column5Image',
              title: 'Layout 2 - Column 5 Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout2,
            },

            {
              name: 'layout2Column5Text',
              title: 'Layout 2, Column 5. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount = text.split(/\s+/).length
                  return wordCount <= 63 || 'Text cannot exceed 63 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },
            {
              name: 'layout2date',
              title: 'Layout 2 - Publication date',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 3 || 'Text cannot exceed 3 words.'
                }),
              hidden: ({parent}) => !parent?.layout2,
            },

            // Layout 3 Fields (Visible only if Layout 3 is active)
            {
              name: 'slider3',
              title: 'Image overlay',
              type: 'array',
              description: 'Display a maximum of 1 Image and 1 PNG Collage ',
              options: {
                layout: 'grid',
              },

              hidden: ({parent}) => !parent?.layout3,
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
                        layout: 'gridpress',
                      },
                      of: [
                        {
                          name: 'imageObject',
                          title: 'Image',
                          type: 'object',
                          fields: [
                            {
                              name: 'image',
                              title: 'Image',
                              type: 'image',
                              hidden: ({parent}) => parent?.newDay,
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

            {
              name: 'layout3Column1Text',
              title: 'Layout 3, Column 1. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 103 || 'Text cannot exceed 103 words.'
                }),
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column2Text',
              title: 'Layout 3, Column 2. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 44 || 'Text cannot exceed 44 words.'
                }),
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column23Text',
              title: 'Small Publication Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 5 || 'Text cannot exceed 5 words.'
                }),
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column2Image',
              title: 'Layout 3, Small Publication Logo (PNG only)',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout3,
            },

            {
              name: 'layout3Column22Text',
              title: 'Layout 3, Column 2. Bodycopy 2',
              type: 'array',
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 39 || 'Text cannot exceed 39 words.'
                }),
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Image3_5',
              title: 'Layout 3, Large Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column3Text',
              title: 'Layout 3, Column 3. Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 10 || 'Text cannot exceed 10 words.'
                }),

              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column33Text',
              title: 'Layout 3, Column 3. Image description.',
              type: 'array',
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 5 || 'Text cannot exceed 5 words.'
                }),

              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column4Text',
              title: 'Layout 3, Column 4. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 25 || 'Text cannot exceed 25 words.'
                }),
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3Column5Text',
              title: 'Layout 3, Column 5. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 25 || 'Text cannot exceed 25 words.'
                }),
              hidden: ({parent}) => !parent?.layout3,
            },
            {
              name: 'layout3date',
              title: 'Layout 3 - Publication date',
              type: 'array',
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 3 || 'Text cannot exceed 3 words.'
                }),
              of: [blockConfig],
              hidden: ({parent}) => !parent?.layout3,
            },




             // layout4
             {
              name: 'layout4bw',
              title: 'Layout 4, Large Image, Black and White',
              type: 'boolean',
              description:
                'Toggle to activate Black and White',
              initialValue: false,
              hidden: ({parent}) => !parent?.layout4,
                        },
             {
              name: 'layout4Image',
              title: 'Layout 4, Large Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout4,
            },
            {
              name: 'layout4logo',
              title: 'Layout 4, Small Publication Logo (PNG only)',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout4,
            },
        
          {
            name: 'layout4bigtext',
            title: 'Layout 4, Large Text',
            type: 'array',
            of: [blockConfig],
            validation: (Rule) =>
              Rule.custom((blocks) => {
                if (!blocks) return true
                const text4 = blocks
                  .map((block) => block.children.map((child) => child.text || '').join(''))
                  .join(' ')
                const wordCount4 = text4.split(/\s+/).length
                return wordCount4 <= 103 || 'Text cannot exceed 103 words.'
              }),
            hidden: ({parent}) => !parent?.layout4,
          },





             // layout5
             {
              name: 'layout5imgsl',
              title: 'Layout 5, Small Landscape Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5imgsp',
              title: 'Layout 5, Small Portrait Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5subtitle',
              title: 'Layout 5, Column 1. Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 10 || 'Text cannot exceed 10 words.'
                }),

              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5imgxsl',
              title: 'Layout 5, Extra Small Landscape Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5imgxsp',
              title: 'Layout 5, Extra Small Portrait Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout5,
            },
           
         
            {
              name: 'layout5col3body',
              title: 'Layout 5, Column 3. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                }),

              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5imglarge',
              title: 'Layout 5, Largest Image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5col4body',
              title: 'Layout 5, Column 4. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                }),

              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5col5body',
              title: 'Layout 5, Column 5. Bodycopy',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                }),

              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5logo',
              title: 'Layout 5, Small Publication Logo (PNG only)',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot and crop functionality
              },
              hidden: ({parent}) => !parent?.layout5,
            },
            {
              name: 'layout5col5sub',
              title: 'Layout 5, Column 6. Subtitle',
              type: 'array',
              of: [blockConfig],
              validation: (Rule) =>
                Rule.custom((blocks) => {
                  if (!blocks) return true
                  const text4 = blocks
                    .map((block) => block.children.map((child) => child.text || '').join(''))
                    .join(' ')
                  const wordCount4 = text4.split(/\s+/).length
                  return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                }),

              hidden: ({parent}) => !parent?.layout5,
            },



               // layout6
      
               {
                name: 'layout6image',
                title: 'Layout 6, Portrait Image',
                type: 'image',
                options: {
                  hotspot: true, // Enables hotspot and crop functionality
                },
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6logo',
                title: 'Layout 6, Small Publication Logo (PNG only)',
                type: 'image',
                options: {
                  hotspot: true, // Enables hotspot and crop functionality
                },
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6col3sub',
                title: 'Layout 6, Column 3. Subtitle',
                type: 'array',
                of: [blockConfig],
                validation: (Rule) =>
                  Rule.custom((blocks) => {
                    if (!blocks) return true
                    const text4 = blocks
                      .map((block) => block.children.map((child) => child.text || '').join(''))
                      .join(' ')
                    const wordCount4 = text4.split(/\s+/).length
                    return wordCount4 <= 200 || 'Text cannot exceed 200 words.'
                  }),
  
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6Imagesp',
                title: 'Layout 6, Small Portrait Image 1',
                type: 'image',
                options: {
                  hotspot: true, // Enables hotspot and crop functionality
                },
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6Imagspe2',
                title: 'Layout 6, Small Portrait Image 2',
                type: 'image',
                options: {
                  hotspot: true, // Enables hotspot and crop functionality
                },
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6Imagelarlan',
                title: 'Layout 6, Largest Landscape Image',
                type: 'image',
                options: {
                  hotspot: true, // Enables hotspot and crop functionality
                },
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6subtitle',
                title: 'Layout 6, Column 4. Subtitle',
                type: 'array',
                of: [blockConfig],
                validation: (Rule) =>
                  Rule.custom((blocks) => {
                    if (!blocks) return true
                    const text4 = blocks
                      .map((block) => block.children.map((child) => child.text || '').join(''))
                      .join(' ')
                    const wordCount4 = text4.split(/\s+/).length
                    return wordCount4 <= 10 || 'Text cannot exceed 10 words.'
                  }),
  
                hidden: ({parent}) => !parent?.layout6,
              },
              
              {
                name: 'layout6col4body',
                title: 'Layout 6, Column 4. Bodycopy',
                type: 'array',
                of: [blockConfig],
                validation: (Rule) =>
                  Rule.custom((blocks) => {
                    if (!blocks) return true
                    const text4 = blocks
                      .map((block) => block.children.map((child) => child.text || '').join(''))
                      .join(' ')
                    const wordCount4 = text4.split(/\s+/).length
                    return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                  }),
  
                hidden: ({parent}) => !parent?.layout6,
              },

              {
                name: 'layout6col5body',
                title: 'Layout 6, Column 5. Bodycopy',
                type: 'array',
                of: [blockConfig],
                validation: (Rule) =>
                  Rule.custom((blocks) => {
                    if (!blocks) return true
                    const text4 = blocks
                      .map((block) => block.children.map((child) => child.text || '').join(''))
                      .join(' ')
                    const wordCount4 = text4.split(/\s+/).length
                    return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                  }),
  
                hidden: ({parent}) => !parent?.layout6,
              },
              {
                name: 'layout6col6body',
                title: 'Layout 6, Column 6. Bodycopy',
                type: 'array',
                of: [blockConfig],
                validation: (Rule) =>
                  Rule.custom((blocks) => {
                    if (!blocks) return true
                    const text4 = blocks
                      .map((block) => block.children.map((child) => child.text || '').join(''))
                      .join(' ')
                    const wordCount4 = text4.split(/\s+/).length
                    return wordCount4 <= 500 || 'Text cannot exceed 500 words.'
                  }),
  
                hidden: ({parent}) => !parent?.layout6,
              },
        
       

          ],



         


          preview: {
            select: {
              title: 'location', // Assuming 'location' is a field representing the section's name/title
              layout1Image: 'mainImage',
              layout2Image: 'layout2Image2',
              layout3Image: 'layout3Image3_5',
              layout4Image: 'layout4Image',
              layout5Image: 'layout5imglarge',
              layout6Image: 'layout6Imagesp',
            },
            prepare(selection) {
              const {title, layout1Image, layout2Image, layout3Image, layout4Image, layout5Image, layout6Image} = selection

              // Select the image based on the active layout for each section
              const media = layout1Image || layout2Image || layout3Image || layout4Image || layout5Image || layout6Image

              return {
                title: title || 'Article',
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
      layout1Image: 'sections.0.mainImage',
      layout2Image: 'sections.0.layout2Image2',
      layout3Image: 'sections.0.layout3Image3_5',
    },
    prepare(selection) {
      const {title, layout1Image, layout2Image, layout3Image} = selection

      // Determine which image to show based on active layout
      const media = layout1Image || layout2Image || layout3Image

      return {
        title: title,
        media: media,
      }
    },
  },
}

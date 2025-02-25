// import { A11yEmoji } from 'a11y-react-emoji';
// import { MdSettings, MdColorLens, MdMenu } from 'react-icons/md';
// const Project = () => <A11yEmoji symbol="🏠" label="Home Icon" />;
// const archive = () => <Emoji style={{ fontSize: "2rem" }} symbol="📽️" />;

export default {
  name: 'home',
  title: 'Weddings Overview',
  type: 'document',
  fields: [
    {
      name: 'seo',
      title: 'CLICK HERE FOR SEO METADATA',
      type: 'seo', // Reusing the `seo` object schema
      options: {
        collapsible: true,
        collapsed: true, // Set to `true` to keep it collapsed by default
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Logo',
      type: 'image',
    },
    { 
      name: 'slider',
      title: 'Home Gallery',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'slide', 
          title: 'Home Gallery',
          type: 'object',
          fields: [
            {
              name: 'images',
              title: 'Content',
              type: 'array',
              options: {
                layout: 'grid',
              },
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
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      hidden: ({parent}) => parent?.newDay,
                      hidden: ({parent}) => parent?.newVideo,
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
                    src="/static/pink.png"
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
    { 
      name: 'slider2',
      title: 'Home Gallery Mobile',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'slide', 
          title: 'Home Gallery',
          type: 'object',
          fields: [
            {
              name: 'images',
              title: 'Content',
              type: 'array',
              options: {
                layout: 'grid',
              },
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
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      hidden: ({parent}) => parent?.newDay,
                      hidden: ({parent}) => parent?.newVideo,
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
                    src="/static/pink.png"
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
    // {
    //   name: 'gallery',
    //   title: 'Timed Full-Screen Gallery',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'image',
    //       options: {
    //         hotspot: true, // Enables image cropping in the Studio
    //       },
    //     },
    //   ],
    //   validation: Rule => Rule.max(4).min(4).error('You must add exactly 4 images.'),
    //   description: 'Upload 4 images to be displayed in a timed full-screen gallery.',
    // },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

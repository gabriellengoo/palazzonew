  // weddings Grid
  export const gridQuery = `*[_type == "works" ] 
  
  {title, grid[] {
  _key, double, spacer, 
  "video" : {"id" : video.asset->playbackId, 
  "aspect" : video.asset->data.aspect_ratio , 
  "thumbTime" : video.asset->thumbTime }, 
  "image" : 
    {"image" : image.asset._ref, 
    "aspect" : image.asset->metadata.dimensions.aspectRatio, 
    "size" : {"width" : image.asset->metadata.dimensions.width, 
    "height" : image.asset->metadata.dimensions.height}, 
    "position" : position }, 
    "imageh" : 
    { "imageh" : imageh.asset._ref,
    "aspect" : image.asset->metadata.dimensions.aspectRatio, 
    "size" : {"width" : image.asset->metadata.dimensions.width, 
    "height" : image.asset->metadata.dimensions.height}, 
    "position" : position }, 
    portrait, day,
    link, title, year,
  "reference": reference->{
      _id,
      title,
      "slug" : slug.current,
      "slider": slider[] {
        _key,
        day, 
        images[] {
          _key,
          portrait,
          "imageUrl": image.asset->url
        }
      }
    }
       }
} | order(_updatedAt desc)[0]`;
  

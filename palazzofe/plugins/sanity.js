// plugins/sanity.js
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '0i1cdi6a',
    dataset: 'production',       // Or your dataset name
  useCdn: true,                  // `false` if you want to bypass the CDN for fresh data
})

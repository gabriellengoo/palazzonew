import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

// Initialize Sanity client
const client = sanityClient({
    projectId: '0i1cdi6a',
    dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
})

// Initialize the image URL builder with the Sanity client
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

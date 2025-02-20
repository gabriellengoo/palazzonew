// plugins/sanity-client.js
import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: '0i1cdi6a',
    dataset: 'production',   // Replace with your dataset name
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
})

export default ({ app }, inject) => {
  inject('sanityClient', client)  // Makes client accessible as $sanityClient
}

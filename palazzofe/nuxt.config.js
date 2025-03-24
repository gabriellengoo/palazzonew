export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Palazzo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Palazzo is a sophisticated event venue offering exquisite spaces for weddings, corporate events, and more. Discover elegance and class at Palazzo.' },
      { hid: 'keywords', name: 'keywords', content: 'Palazzo, event venue, wedding venue, corporate events, elegant venue, sophisticated spaces' },
      { name: 'format-detection', content: 'telephone=no' },
      
      // Open Graph meta tags for better social sharing
      { property: 'og:title', content: 'Palazzo' },
      { property: 'og:description', content: 'Palazzo is a sophisticated event venue offering exquisite spaces for weddings, corporate events, and more. Discover elegance and class at Palazzo.' },
      { property: 'og:image', content: '/static/favicon.ico' },
      { property: 'og:url', content: 'https://www.palazzoeventi.com/' },
      { property: 'og:type', content: 'website' },
  
      // Twitter Card meta tags for better Twitter sharing
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Palazzo' },
      { name: 'twitter:description', content: 'Palazzo is a sophisticated event venue offering exquisite spaces for weddings, corporate events, and more. Discover elegance and class at Palazzo.' },
      { name: 'twitter:image', content: '/static/favicon.ico' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        href: '/static/favicon.ico',
        as: 'image'
      },
      { rel: 'preload', href: '/Navn.webp', as: 'image', type: 'image/webp' },
      { rel: 'preload', href: '/Navnt.webp', as: 'image', type: 'image/webp' }
    ]
  },  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/transitions.css',
    '@/assets/css/typography.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  // ],

  plugins: [
    { src: '@plugins/masonry', mode: 'client' },
    { src: '@plugins/lazy', mode: 'client' },
    { src: '@plugins/slider', mode: 'client' },
    '~/plugins/preview.client.js',
    '~/plugins/image-builder.js',
    '~/plugins/sanity.js',
    '~/plugins/sanity-client.js',
    '~/plugins/preload.js',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity/module',
    // '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['vue-scrollto/nuxt', "nuxt-gsap-module", 
    // "@nuxtjs/preload"
  ],

  // preload: {
  //   fonts: true,
  //   images: true, // Auto-preload images
  //   videos: true,
  //   scripts: true,
  //   links: true,
  // },

  sanity: {
    // module options
    projectId: '0i1cdi6a',
    apiVersion: '2023-09-05',
    useCdn: false, 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules\/@studio-freight\/lenis/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      });
    },
        // loaders: {
    //   sass: {
    //     implementation: require('sass'),
    //   },
    //   scss: {
    //     implementation: require('sass'),
    //   },
    // },
    // extend(config, { isDev, isClient }) {
    //   if (process.env.IGNORE_BUILD_ERRORS === 'true') {
    //   }
    // },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  image: {
    sanity: {
      projectId: '0i1cdi6a',
      dataset: 'production',
    },
  //      domains: ['cdn.sanity.io'], // ✅ Allow remote Sanity images
  //   providers: {
  //     sanity: {
  //       baseURL: 'https://cdn.sanity.io', // ✅ Fix incorrect baseURL
  //     },
  //   },
  //   presets: {
  //     default: {
  //       modifiers: {
  //         format: 'webp',
  //         quality: 75,
  //       },
  //     },
  //   },
  },

  // image: {
  //   domains: ['cdn.sanity.io'], // ✅ Allow remote Sanity images
  //   providers: {
  //     sanity: {
  //       baseURL: 'https://cdn.sanity.io', // ✅ Fix incorrect baseURL
  //     },
  //   },
  //   presets: {
  //     default: {
  //       modifiers: {
  //         format: 'webp',
  //         quality: 75,
  //       },
  //     },
  //   },
  // },

  // sanity: {
  //   withCredentials: true,
  //   useCdn: false,
  // },
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image', 
    '@nuxtjs/tailwindcss',
     "shadcn-nuxt", 
     [
          '@nuxtjs/google-fonts',
          {
              families: {
                  Lato: {
                      wght: [300, 400, 700],
                      ital: [300],
                  },
              },
          },
      ], 
      "@nuxt/icon",
      '@pinia/nuxt'
    ],
  shadcn: {
    prefix: '',

    componentDir: './components/ui'
  }
})
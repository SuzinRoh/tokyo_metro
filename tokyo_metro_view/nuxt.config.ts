// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from '@nuxtjs/composition-api'

export default defineNuxtConfig({
    typescript: { strict: true },
    css: ['vuetify/lib/styles/main.sass'],
      build: {
        transpile: ['vuetify'],
      },
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    },
    modules: [
      '@nuxtjs/composition-api',
    ],
    
})

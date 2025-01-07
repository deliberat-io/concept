export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",

  modules: ["@nuxtjs/plausible", "@nuxtjs/robots"],
  devtools: { enabled: false },
  compatibilityDate: "2025-01-07",
});
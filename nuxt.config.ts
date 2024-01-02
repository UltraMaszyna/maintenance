// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      title: 'Ultra Maszyna - Konserwacja',
      meta: [
        {
          name: "robots",
          content: "noindex",
        },
        { "http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate" },
        { "http-equiv": "Pragma", content: "no-cache" },
        { "http-equiv": "Expires", content: "0" },
      ],
    },
  },
});

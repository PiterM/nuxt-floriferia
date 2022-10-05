export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  srcDir: "src/",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-floriferia",
    htmlAttrs: {
      lang: "pl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/js/modernizr.js" },
      { src: "/js/pace.min.js" },
      { src: "/js/jquery-3.2.1.min.js", body: true },
      { src: "/js/plugins.js", body: true },
      { src: "/js/main.js", body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "src/assets/css/base.css",
    "src/assets/css/vendor.css",
    "src/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

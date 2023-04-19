// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  css: ["~/assets/css/main.css"],
  // plugins: [
  //   {
  //     src: "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
  //     mode: "client",
  //   },
  // ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

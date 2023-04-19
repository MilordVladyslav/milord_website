export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: require("../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"),
    },
  };
});

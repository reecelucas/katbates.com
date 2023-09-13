module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("postcss-custom-media"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./**/*.{astro,html,tsx}"],
      variables: true,
    }),
  ],
};

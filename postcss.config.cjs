module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./**/*.{astro,html,tsx}"],
      variables: true,
    }),
  ],
};

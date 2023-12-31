module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("postcss-custom-media"),
    require("postcss-sort-media-queries")({ sort: "mobile-first" }),
    ...(process.env.NODE_ENV === "production"
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: ["./**/*.{astro,html,tsx}"],
            variables: true,
          }),
        ]
      : []),
  ],
};

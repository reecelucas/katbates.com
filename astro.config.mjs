import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.katbates.com/",
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  output: "static",
  trailingSlash: "ignore",
  server: {
    port: parseInt(process.env.PORT || "3000"),
  },
});

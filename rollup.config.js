export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/bundle-cjs.min.js",
      format: "cjs",
    },
    {
      file: "lib/bundle-es.min.js",
      format: "es",
    },
  ],
};

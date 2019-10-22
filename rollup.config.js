import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "lib/index.js",
    format: "cjs"
  },
  plugins: [json(), terser()]
};

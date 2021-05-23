import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";

const pkg = require("./package.json");
import scss from "rollup-plugin-scss";

export default {
  input: "src/index.js",
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name: "Svelte" },
  ],
  plugins: [svelte(), resolve(), scss()],
};

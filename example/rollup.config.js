import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import svgr from "@svgr/rollup";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  plugins: [
    typescript(),
    babel({
      plugins: ["external-helpers"]
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    svgr()
  ],
  external: ["react", "react-dom", "styled-components"]
};

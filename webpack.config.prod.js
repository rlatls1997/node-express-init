import { resolve } from "path";

export const entry = "./source/index.js";
export const output = {
  mode: "production",
  path: resolve(__dirname, "dist"),
  filename: "index_bundle.js",
};

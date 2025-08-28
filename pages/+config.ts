import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../layouts/Layout.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  Layout,
  title: "VIEW",
  description: "Demo showcasing Vike",
  favicon: "./assets/favicon.png",
  extends: vikeReact,
  prerender: true,
} satisfies Config;

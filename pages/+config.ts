import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../layouts/Layout.js";
import favicon from "../assets/favicon.png";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  Layout,
  title: "VIEW",
  description: "Demo showcasing Vike",
  favicon,
  extends: vikeReact,
  prerender: true,
} satisfies Config;

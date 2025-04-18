import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

import callouts from "markdown-it-obsidian-callouts";

const markdown = {
  plugins: [callouts],
};

const site = lume(
  {
    src: "src",
    dest: "public",
    location: new URL("https://2b3d4f.github.io/lume-theme-forest"),
  },
  { markdown }
);

site.use(plugins());

export default site;

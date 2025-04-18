import { merge } from "lume/core/utils/object.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import metas from "lume/plugins/metas.ts";
import date from "lume/plugins/date.ts";
import { favicon, Options as FaviconOptions } from "lume/plugins/favicon.ts";
import tailwindCSS from "lume/plugins/tailwindcss.ts";

import "lume/types.ts";

export interface Options {
  favicon?: Partial<FaviconOptions>;
}

export const defaults: Options = {
  favicon: {
    input: "favicon.svg",
  },
};

export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);
  return (site: Lume.Site) => {
    site
      .use(resolveUrls())
      .use(basePath())
      .use(slugifyUrls())
      .use(metas())
      .use(date())
      .use(favicon(options.favicon))
      .use(tailwindCSS())
      .add("styles.css")
  };
}


import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const siteUrl = "https://whiskarz.com";

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

export default function SEO({
  title,
  description,
  path,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const url = `${siteUrl}${path}`;

    document.title = title;

    setMeta("name", "description", description);
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow"
    );

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = url;
  }, [title, description, path, noindex]);

  return null;
}

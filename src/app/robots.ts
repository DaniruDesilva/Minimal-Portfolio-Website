import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "CCBot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://danirudesilva.com/sitemap.xml",
  };
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demo.useHUKUM.com",
      lastModified: new Date(),
    },
    {
      url: "https://demo.useHUKUM.com/demo",
      lastModified: new Date(),
    },
  ];
}

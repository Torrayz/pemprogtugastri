import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://torrayz-studio.vercel.app";
  return ["", "/projects", "/about", "/lab", "/contact", ...projects.map(p => `/projects/${p.slug}`)].map(path => ({ url: base + path, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
}
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Titans.Soft — Custom Software Development",
    short_name: "Titans.Soft",
    description:
      "Custom web, mobile, and desktop software for companies across Egypt, Saudi Arabia, and MENA.",
    start_url: "/en",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}

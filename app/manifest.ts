import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nearbyshops - Shop Local, Support Communities",
    short_name: "Nearbyshops",
    description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}


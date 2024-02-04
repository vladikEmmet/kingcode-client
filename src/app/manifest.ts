import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "IT-школа King Code",
        short_name: "King Code",
        description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
        start_url: "/",
        display: "standalone",
        background_color: "#fdd034",
        theme_color: "#2d2d2d",
        icons: [
        // {
        //     src: "/icon-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        // },
        {
            src: "/icon512_rounded.png",
            sizes: "512x512",
            type: "image/png",
        },
        {
            src: "/icon512_maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        }
        ],
    };
}
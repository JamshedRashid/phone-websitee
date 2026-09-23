export type ShowcasePhone = {
    id: string;
    brand: "Apple" | "Samsung" | "Google";
    name: string;
    summary: string;
    highlights: string[];
    officialSpecsUrl: string;

    // Add a real product photo after we obtain an image suitable for this site.
    imageSrc: string | null;
};

export const showcasePhones: ShowcasePhone[] = [
    {
        id: "iphone-18-pro",
        brand: "Apple",
        name: "iPhone 18 Pro",
        summary: "Apple's 6.3-inch Pro iPhone with the A20 Pro chip.",
        highlights: [
            "6.3-inch Super Retina XDR display",
            "A20 Pro chip",
            "256GB, 512GB, 1TB or 2TB",
        ],
        officialSpecsUrl: "https://www.apple.com/iphone-18-pro/specs/",
        imageSrc: "/images/iphone-18-pro.png",
    },
    {
        id: "iphone-18-pro-max",
        brand: "Apple",
        name: "iPhone 18 Pro Max",
        summary: "The larger 6.9-inch model in Apple's Pro range.",
        highlights: [
            "6.9-inch Super Retina XDR display",
            "A20 Pro chip",
            "256GB, 512GB, 1TB or 2TB",
        ],
        officialSpecsUrl: "https://www.apple.com/iphone-18-pro/specs/",
        imageSrc: "/images/iphone-18-pro-max.jpg",
    },
    {
        id: "iphone-duo",
        brand: "Apple",
        name: "iPhone Duo",
        summary: "Apple's foldable iPhone with inner and outer displays.",
        highlights: [
            "7.6-inch inner OLED display",
            "5.4-inch outer OLED display",
            "A20 Pro chip",
        ],
        officialSpecsUrl: "https://www.apple.com/iphone-duo/specs/",
        imageSrc: "/images/iphone-duo.png",
    },
    {
        id: "galaxy-s26-ultra",
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        summary: "Samsung's Galaxy S26 Ultra flagship phone.",
        highlights: [
            "200MP main camera",
            "120Hz display",
            "256GB, 512GB or 1TB options",
        ],
        officialSpecsUrl:
            "https://www.samsung.com/us/smartphones/galaxy-s26-ultra/",
        imageSrc: "/images/galaxy-s26-ultra.png",
    },
    {
        id: "galaxy-z-fold8",
        brand: "Samsung",
        name: "Galaxy Z Fold8",
        summary: "Samsung's foldable Galaxy with two displays.",
        highlights: [
            "7.6-inch main display",
            "5.5-inch cover display",
            "256GB, 512GB or 1TB options",
        ],
        officialSpecsUrl:
            "https://www.samsung.com/us/smartphones/galaxy-z-fold8/",
        imageSrc: "/images/galaxy-z-fold8.png",
    },
    {
        id: "pixel-11",
        brand: "Google",
        name: "Pixel 11",
        summary: "Google's Pixel 11 with its Tensor G6 processor.",
        highlights: [
            "6.3-inch Actua display",
            "Google Tensor G6",
            "256GB or 512GB",
        ],
        officialSpecsUrl:
            "https://store.google.com/us/product/pixel_11_specs?hl=en-US",
        imageSrc: "/images/pixel-11.png",
    },
    {
        id: "pixel-11-pro",
        brand: "Google",
        name: "Pixel 11 Pro",
        summary: "Google's smaller Pro model with a 6.3-inch display.",
        highlights: [
            "6.3-inch Super Actua display",
            "Google Tensor G6",
            "256GB, 512GB or 1TB",
        ],
        officialSpecsUrl:
            "https://store.google.com/us/product/pixel_11_pro_specs?hl=en-US",
        imageSrc: "/images/pixel-11-pro.png",
    },
    {
        id: "pixel-11-pro-xl",
        brand: "Google",
        name: "Pixel 11 Pro XL",
        summary: "The larger Pro model in Google's Pixel 11 range.",
        highlights: [
            "6.8-inch Super Actua display",
            "Google Tensor G6",
            "256GB, 512GB or 1TB",
        ],
        officialSpecsUrl:
            "https://store.google.com/us/product/pixel_11_pro_specs?hl=en-US",
        imageSrc: "/images/pixel-11-pro-xl.png",
    },
];
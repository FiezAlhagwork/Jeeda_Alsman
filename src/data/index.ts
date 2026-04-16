export interface Project {
    id: number;
    title?: string;
    category: string;
    image: string;
}

export interface Client {
    id: string;
    name: string;
    projectCount: number;
    type: "branding" | "social" | "logos" | "posters" | "uiux" | "motion";
    previewImages: string[];
    projects: Project[];
}

function publicImage(path: string) {
    const clean = path.replace(/^\.?\//, "");
    const base = (import.meta as any)?.env?.BASE_URL ?? "/";
    const baseWithSlash = String(base).endsWith("/") ? String(base) : `${base}/`;
    return `${baseWithSlash}${clean}`;
}

export const clientsData: Client[] = [
    {
        id: "social",
        name: "social",
        projectCount: 12,
        type: "branding",
        previewImages: [
            publicImage("social1.jpg"),
            publicImage("social2.jpg"),
            publicImage("social3.jpg"),
        ],
        projects: [
            { id: 101, title: "Ethereal Essence", category: "social", image: publicImage("social1.jpg") },
            { id: 102, title: "Organic Roots", category: "social", image: publicImage("social2.jpg") },
            { id: 103, title: "Solaris Identity", category: "social", image: publicImage("social3.jpg") },
            { id: 104, title: "Solaris Identity", category: "social", image: publicImage("social4.jpg") },
            { id: 105, title: "Solaris Identity", category: "social", image: publicImage("social5.jpg") },
            { id: 106, title: "Solaris Identity", category: "social", image: publicImage("social6.jpg") },
            { id: 107, title: "Solaris Identity", category: "social", image: publicImage("social7.jpg") },
            { id: 108, title: "Solaris Identity", category: "social", image: publicImage("social8.jpg") },
            { id: 109, title: "Solaris Identity", category: "social", image: publicImage("social9.jpg") },
            { id: 110, title: "Solaris Identity", category: "social", image: publicImage("social10.jpg") },
            { id: 111, title: "Solaris Identity", category: "social", image: publicImage("social11.jpg") },
        ]
    },

    {
        id: "Soft",
        name: "Soft",
        projectCount: 24,
        type: "social",
        previewImages: [
            publicImage("soft1.jpg"),
            publicImage("soft2.jpg"),
            publicImage("soft3.jpg"),
            publicImage("soft4.jpg"),
        ],
        projects: [
            { id: 201, title: "Urban Pulse", category: "soft", image: publicImage("soft1.jpg"), },
            { id: 202, title: "Neon Nights", category: "soft", image: publicImage("soft2.jpg"), },
            { id: 203, title: "Neon Nights", category: "soft", image: publicImage("soft3.jpg"), },
            { id: 204, title: "Neon Nights", category: "soft", image: publicImage("soft4.jpg"), },
            { id: 205, title: "Neon Nights", category: "soft", image: publicImage("soft5.jpg"), },
            { id: 206, title: "Neon Nights", category: "soft", image: publicImage("soft6.jpg"), },
            { id: 207, title: "Neon Nights", category: "soft", image: publicImage("soft7.jpg"), },
            { id: 208, title: "Neon Nights", category: "soft", image: publicImage("soft8.jpg"), },
            { id: 209, title: "Neon Nights", category: "soft", image: publicImage("soft9.jpg"), },
            { id: 210, title: "Neon Nights", category: "soft", image: publicImage("soft10.jpg"), },
            { id: 211, title: "Neon Nights", category: "soft", image: publicImage("soft11.jpg"), },
            { id: 212, title: "Neon Nights", category: "soft", image: publicImage("soft12.jpg"), },
        ]
    },


    {
        id: "eilajCare",
        name: "Eilaj Care ",
        projectCount: 18,
        type: "posters",
        previewImages: [
            publicImage("eilajCare1.jpg"),
            publicImage("eilajCare2.jpg"),
        ],
        projects: [
            { id: 401, title: "Vivid Visions", category: "Eilaj Care ", image: publicImage("eilajCare1.jpg"), },
            { id: 402, title: "Minimalist Muse", category: "Eilaj Care ", image: publicImage("eilajCare2.jpg"), },
            { id: 403, title: "Minimalist Muse", category: "Eilaj Care ", image: publicImage("eilajCare3.jpg"), },
            { id: 404, title: "Minimalist Muse", category: "Eilaj Care ", image: publicImage("eilajCare4.jpg"), },
            { id: 405, title: "Minimalist Muse", category: "Eilaj Care ", image: publicImage("eilajCare5.jpg"), },
            { id: 406, title: "Minimalist Muse", category: "Eilaj Care ", image: publicImage("eilajCare6.jpg"), },
        ]
    },
    {
        id: "BabyJoy",
        name: "Baby Joy",
        projectCount: 15,
        type: "social",
        previewImages: [
            publicImage("babyJoy1.jpg"),
            publicImage("babyJoy2.jpg"),
            publicImage("babyJoy3.jpg"),
            publicImage("babyJoy4.jpg"),
        ],
        projects: [
            { id: 601, title: "Brand Intro", category: "Baby Joy", image: publicImage("babyJoy1.jpg") },
            { id: 602, title: "App Promo", category: "Baby Joy", image: publicImage("babyJoy2.jpg") },
            { id: 603, title: "App Promo", category: "Baby Joy", image: publicImage("babyJoy3.jpg") },
            { id: 604, title: "App Promo", category: "Baby Joy", image: publicImage("babyJoy4.jpg") },
            { id: 605, title: "App Promo", category: "Baby Joy", image: publicImage("Teemo.jpg") },
            { id: 606, title: "App Promo", category: "Baby Joy", image: publicImage("Teemo1.jpg") },
            { id: 607, title: "App Promo", category: "Baby Joy", image: publicImage("Teemo2.jpg") },
        ]
    },
    {
        id: "Lifree",
        name: "Lifree",
        projectCount: 18,
        type: "branding",
        previewImages: [
            publicImage("lifree1.jpg"),
            publicImage("lifree2.jpg"),
            publicImage("lifree3.jpg"),
        ],
        projects: [
            { id: 401, title: "Vivid Visions", category: "Lifree", image: publicImage("lifree1.jpg") },
            { id: 402, title: "Minimalist Muse", category: "Lifree", image: publicImage("lifree2.jpg") },
            { id: 403, title: "Minimalist Muse", category: "Lifree", image: publicImage("lifree3.jpg") },
        ]
    },
    // {
    //     id: "logos",
    //     name: "Logos",
    //     description: "Iconic marks that distill complex brand values into simple, memorable forms.",
    //     projectCount: 45,
    //     type: "logos",
    //     previewImages: [
    //         "https://picsum.photos/seed/logo1/300/300",
    //         "https://picsum.photos/seed/logo2/300/300",
    //         "https://picsum.photos/seed/logo3/300/300",
    //         "https://picsum.photos/seed/logo4/300/300",
    //         "https://picsum.photos/seed/logo5/300/300",
    //         "https://picsum.photos/seed/logo6/300/300",
    //     ],
    //     projects: [
    //         { id: 301, title: "Nexus Mark", category: "Logo", image: "https://picsum.photos/seed/logo1/800/600", description: "Tech startup emblem." },
    //         { id: 302, title: "Vivid Icon", category: "Symbol", image: "https://picsum.photos/seed/logo2/800/600", description: "Creative agency mark." },
    //     ]
    // },
    // {
    //     id: "carsole",
    //     name: "carsole",
    //     description: "User-centric digital interfaces that balance aesthetics with functional precision.",
    //     projectCount: 8,
    //     type: "uiux",
    //     previewImages: [
    //         "https://picsum.photos/seed/ui1/600/400",
    //         "https://picsum.photos/seed/ui2/600/400",
    //     ],
    //     projects: [
    //         { id: 501, title: "Crypto Flow", category: "Mobile App", image: "https://picsum.photos/seed/ui1/800/600", description: "Next-gen crypto wallet." },
    //         { id: 502, title: "Nexus Dashboard", category: "Web App", image: "https://picsum.photos/seed/ui2/800/600", description: "DeFi platform interface." },
    //     ]
    // },

];

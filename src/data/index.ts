export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

export interface Client {
    id: string;
    name: string;
    description: string;
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
        description: "Strategic brand identities that tell a story and build lasting connections.",
        projectCount: 12,
        type: "branding",
        previewImages: [
            publicImage("social1.jpg"),
            publicImage("social2.jpg"),
            publicImage("social3.jpg"),
        ],
        projects: [
            { id: 101, title: "Ethereal Essence", category: "social", image: publicImage("social1.jpg"), description: "Minimalist luxury branding." },
            { id: 102, title: "Organic Roots", category: "social", image: publicImage("social2.jpg"), description: "Sustainable skincare identity." },
            { id: 103, title: "Solaris Identity", category: "social", image: publicImage("social3.jpg"), description: "Renewable energy visual system." },
            { id: 104, title: "Solaris Identity", category: "social", image: publicImage("social4.jpg"), description: "Renewable energy visual system." },
            { id: 105, title: "Solaris Identity", category: "social", image: publicImage("social5.jpg"), description: "Renewable energy visual system." },
            { id: 106, title: "Solaris Identity", category: "social", image: publicImage("social6.jpg"), description: "Renewable energy visual system." },
            { id: 107, title: "Solaris Identity", category: "social", image: publicImage("social7.jpg"), description: "Renewable energy visual system." },
            { id: 108, title: "Solaris Identity", category: "social", image: publicImage("social8.jpg"), description: "Renewable energy visual system." },
            { id: 109, title: "Solaris Identity", category: "social", image: publicImage("social9.jpg"), description: "Renewable energy visual system." },
            { id: 110, title: "Solaris Identity", category: "social", image: publicImage("social10.jpg"), description: "Renewable energy visual system." },
            { id: 111, title: "Solaris Identity", category: "social", image: publicImage("social11.jpg"), description: "Renewable energy visual system." },
        ]
    },

    {
        id: "Soft",
        name: "Soft",
        description: "Engaging digital content designed to stop the scroll and spark conversation.",
        projectCount: 24,
        type: "social",
        previewImages: [
            publicImage("soft1.jpg"),
            publicImage("soft2.jpg"),
            publicImage("soft3.jpg"),
            publicImage("soft4.jpg"),
        ],
        projects: [
            { id: 201, title: "Urban Pulse", category: "Campaign", image: publicImage("soft1.jpg"), description: "Streetwear social strategy." },
            { id: 202, title: "Neon Nights", category: "Content", image: publicImage("soft2.jpg"), description: "Festival visual content." },
            { id: 203, title: "Neon Nights", category: "Content", image: publicImage("soft3.jpg"), description: "Festival visual content." },
            { id: 204, title: "Neon Nights", category: "Content", image: publicImage("soft4.jpg"), description: "Festival visual content." },
            { id: 205, title: "Neon Nights", category: "Content", image: publicImage("soft5.jpg"), description: "Festival visual content." },
            { id: 206, title: "Neon Nights", category: "Content", image: publicImage("soft6.jpg"), description: "Festival visual content." },
            { id: 207, title: "Neon Nights", category: "Content", image: publicImage("soft7.jpg"), description: "Festival visual content." },
            { id: 208, title: "Neon Nights", category: "Content", image: publicImage("soft8.jpg"), description: "Festival visual content." },
            { id: 209, title: "Neon Nights", category: "Content", image: publicImage("soft9.jpg"), description: "Festival visual content." },
            { id: 210, title: "Neon Nights", category: "Content", image: publicImage("soft10.jpg"), description: "Festival visual content." },
            { id: 211, title: "Neon Nights", category: "Content", image: publicImage("soft11.jpg"), description: "Festival visual content." },
            { id: 212, title: "Neon Nights", category: "Content", image: publicImage("soft12.jpg"), description: "Festival visual content." },
        ]
    },


    {
        id: "eilajCare",
        name: "Eilaj Care ",
        description: "Experimental typography and layout design for cultural and commercial events.",
        projectCount: 18,
        type: "posters",
        previewImages: [
            publicImage("eilajCare1.jpg"),
            publicImage("eilajCare2.jpg"),
        ],
        projects: [
            { id: 401, title: "Vivid Visions", category: "Experimental", image: publicImage("eilajCare1.jpg"), description: "Color theory exploration." },
            { id: 402, title: "Minimalist Muse", category: "Architecture", image: publicImage("eilajCare2.jpg"), description: "Exhibition poster series." },
            { id: 403, title: "Minimalist Muse", category: "Architecture", image: publicImage("eilajCare3.jpg"), description: "Exhibition poster series." },
            { id: 404, title: "Minimalist Muse", category: "Architecture", image: publicImage("eilajCare4.jpg"), description: "Exhibition poster series." },
            { id: 405, title: "Minimalist Muse", category: "Architecture", image: publicImage("eilajCare5.jpg"), description: "Exhibition poster series." },
            { id: 406, title: "Minimalist Muse", category: "Architecture", image: publicImage("eilajCare6.jpg"), description: "Exhibition poster series." },
        ]
    },
    {
        id: "BabyJoy",
        name: "Baby Joy",
        description: "Dynamic visual storytelling through animation and cinematic movement.",
        projectCount: 15,
        type: "social",
        previewImages: [
            publicImage("babyJoy1.jpg"),
            publicImage("babyJoy2.jpg"),
            publicImage("babyJoy3.jpg"),
            publicImage("babyJoy4.jpg"),
        ],
        projects: [
            { id: 601, title: "Brand Intro", category: "Animation", image: publicImage("babyJoy1.jpg"), description: "Cinematic brand reveal." },
            { id: 602, title: "App Promo", category: "Explainer", image: publicImage("babyJoy2.jpg"), description: "Feature highlight animation." },
            { id: 603, title: "App Promo", category: "Explainer", image: publicImage("babyJoy3.jpg"), description: "Feature highlight animation." },
            { id: 604, title: "App Promo", category: "Explainer", image: publicImage("babyJoy4.jpg"), description: "Feature highlight animation." },
            { id: 605, title: "App Promo", category: "Explainer", image: publicImage("Teemo.jpg"), description: "Feature highlight animation." },
            { id: 606, title: "App Promo", category: "Explainer", image: publicImage("Teemo1.jpg"), description: "Feature highlight animation." },
            { id: 607, title: "App Promo", category: "Explainer", image: publicImage("Teemo2.jpg"), description: "Feature highlight animation." },
        ]
    },
    {
        id: "Lifree",
        name: "Lifree",
        description: "Experimental typography and layout design for cultural and commercial events.",
        projectCount: 18,
        type: "branding",
        previewImages: [
            publicImage("lifree1.jpg"),
            publicImage("lifree2.jpg"),
            publicImage("lifree3.jpg"),
        ],
        projects: [
            { id: 401, title: "Vivid Visions", category: "Experimental", image: publicImage("lifree1.jpg"), description: "Color theory exploration." },
            { id: 402, title: "Minimalist Muse", category: "Architecture", image: publicImage("lifree2.jpg"), description: "Exhibition poster series." },
            { id: 403, title: "Minimalist Muse", category: "Architecture", image: publicImage("lifree3.jpg"), description: "Exhibition poster series." },
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

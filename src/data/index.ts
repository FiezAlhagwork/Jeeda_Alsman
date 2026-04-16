import { Paintbrush, Send, Smartphone, Video } from "lucide-react";
import { Ear, Lightbulb, PenTool, Sparkles, Truck } from "lucide-react";
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

// function publicImage(path: string) {
//     const clean = path.replace(/^\.?\//, "");
//     const base = (import.meta as any)?.env?.BASE_URL ?? "/";
//     const baseWithSlash = String(base).endsWith("/") ? String(base) : `${base}/`;
//     return `${baseWithSlash}${clean}`;
// }

export const clientsData: Client[] = [
  {
    id: "social",
    name: "social",
    projectCount: 12,
    type: "branding",
    previewImages: [
      "./social1.webp",
      "./social2.webp",
      "./social3.webp",
    ],
    projects: [
      { id: 101, title: "Ethereal Essence", category: "social", image: "../social1.webp" },
      { id: 102, title: "Organic Roots", category: "social", image: "../social2.webp" },
      { id: 103, title: "Solaris Identity", category: "social", image: "../social3.webp" },
      { id: 104, title: "Solaris Identity", category: "social", image: "../social4.webp" },
      { id: 105, title: "Solaris Identity", category: "social", image: "../social5.webp" },
      { id: 106, title: "Solaris Identity", category: "social", image: "../social6.webp" },
      { id: 107, title: "Solaris Identity", category: "social", image: "../social7.webp" },
      { id: 108, title: "Solaris Identity", category: "social", image: "../social8.webp" },
      { id: 109, title: "Solaris Identity", category: "social", image: "../social9.webp" },
      { id: 110, title: "Solaris Identity", category: "social", image: "../social10.webp" },
      { id: 111, title: "Solaris Identity", category: "social", image: "../social11.webp" },
    ]
  },

  {
    id: "Soft",
    name: "Soft",
    projectCount: 24,
    type: "social",
    previewImages: [
      "./soft1.webp",
      "./soft2.webp",
      "./soft3.webp",
      "./soft4.webp"
    ],
    projects: [
      { id: 201, title: "Urban Pulse", category: "soft", image: "../soft1.webp", },
      { id: 202, title: "Neon Nights", category: "soft", image: "../soft2.webp", },
      { id: 203, title: "Neon Nights", category: "soft", image: "../soft3.webp", },
      { id: 204, title: "Neon Nights", category: "soft", image: "../soft4.webp", },
      { id: 205, title: "Neon Nights", category: "soft", image: "../soft5.webp", },
      { id: 206, title: "Neon Nights", category: "soft", image: "../soft6.webp", },
      { id: 207, title: "Neon Nights", category: "soft", image: "../soft7.webp", },
      { id: 208, title: "Neon Nights", category: "soft", image: "../soft8.webp", },
      { id: 209, title: "Neon Nights", category: "soft", image: "../soft9.webp", },
      { id: 210, title: "Neon Nights", category: "soft", image: "../soft10.webp", },
      { id: 211, title: "Neon Nights", category: "soft", image: "../soft11.webp", },
      { id: 212, title: "Neon Nights", category: "soft", image: "../soft12.webp", },
    ]
  },


  {
    id: "eilajCare",
    name: "Eilaj Care ",
    projectCount: 18,
    type: "posters",
    previewImages: [
      "./eilajCare1.webp",
      "./eilajCare2.webp",
    ],
    projects: [
      { id: 401, title: "Vivid Visions", category: "Eilaj Care ", image: "../eilajCare1.webp", },
      { id: 402, title: "Minimalist Muse", category: "Eilaj Care ", image: "../eilajCare2.webp", },
      { id: 403, title: "Minimalist Muse", category: "Eilaj Care ", image: "../eilajCare3.webp", },
      { id: 404, title: "Minimalist Muse", category: "Eilaj Care ", image: "../eilajCare4.webp", },
      { id: 405, title: "Minimalist Muse", category: "Eilaj Care ", image: "../eilajCare5.webp", },
      { id: 406, title: "Minimalist Muse", category: "Eilaj Care ", image: "../eilajCare6.webp", },
    ]
  },
  {
    id: "BabyJoy",
    name: "Baby Joy",
    projectCount: 15,
    type: "social",
    previewImages: [
      "./babyJoy1.webp",
      "./babyJoy2.webp",
      "./babyJoy3.webp",
      "./babyJoy4.webp",
    ],
    projects: [
      { id: 601, title: "Brand Intro", category: "Baby Joy", image: "../babyJoy1.webp" },
      { id: 602, title: "App Promo", category: "Baby Joy", image: "../babyJoy2.webp" },
      { id: 603, title: "App Promo", category: "Baby Joy", image: "../babyJoy3.webp" },
      { id: 604, title: "App Promo", category: "Baby Joy", image: "../babyJoy4.webp" },
      { id: 605, title: "App Promo", category: "Baby Joy", image: "../Teemo.webp" },
      { id: 606, title: "App Promo", category: "Baby Joy", image: "../Teemo1.webp" },
      { id: 607, title: "App Promo", category: "Baby Joy", image: "../Teemo2.webp" },
    ]
  },
  {
    id: "Lifree",
    name: "Lifree",
    projectCount: 18,
    type: "branding",
    previewImages: [
      "./lifree1.webp",
      "./lifree2.webp",
      "./lifree3.webp",
    ],
    projects: [
      { id: 401, title: "Vivid Visions", category: "Lifree", image: "../lifree1.webp" },
      { id: 402, title: "Minimalist Muse", category: "Lifree", image: "../lifree2.webp" },
      { id: 403, title: "Minimalist Muse", category: "Lifree", image: "../lifree3.webp" },
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



export const services = [
  {
    title: "Graphic Design",
    description: "Crafting refined visual identities and striking designs that capture attention and communicate your brand with clarity.",
    icon: Paintbrush,
  },
  {
    title: "Video Editing",
    description: "Delivering cinematic, high-impact videos with seamless editing, smooth transitions, and compelling storytelling.",
    icon: Video,
  },
  {
    title: "Social Content",
    description: "Designing visually cohesive content that enhances your presence and drives meaningful engagement.",
    icon: Smartphone,
  },
  {
    title: "Creative Direction",
    description: "Shaping a strong, consistent visual vision that positions your brand with confidence and style.",
    icon: Send,
  },
];

export const steps = [
  {
    number: "Step 1",
    title: "Listen",
    description:
      "I start by deeply understanding the client’s needs, goals, and vision.",
    icon: Ear,
  },
  {
    number: "Step 2",
    title: "Think",
    description:
      "I analyze the requirements and plan the best approach to achieve the desired outcome.",
    icon: Lightbulb,
  },
  {
    number: "Step 3",
    title: "Create",
    description:
      "I turn ideas into creative and visually appealing designs with attention to detail.",
    icon: PenTool,
  },
  {
    number: "Step 4",
    title: "Improve",
    description:
      "I refine and enhance the design based on feedback to reach the best version.",
    icon: Sparkles,
  },
  {
    number: "Step 5",
    title: "Deliver",
    description:
      "I deliver the final work professionally, ready to use, and aligned with client expectations.",
    icon: Truck,
  },
];

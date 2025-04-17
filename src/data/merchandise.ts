
export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'shirts' | 'hoodies' | 'hats' | 'shorts' | 'socks' | 'stickers';
  colors: {
    name: string;
    hex: string;
  }[];
  sizes?: string[];
}

export const merchandise: MerchItem[] = [
  {
    id: "dino-mode-tee",
    name: "Dino Mode Activated Tee",
    description: "Bold black tee with our signature dino skull design. Perfect for activating beast mode!",
    price: 24.99,
    image: "/lovable-uploads/56a35b52-ca15-48c6-b913-86618c8daca5.png",
    category: "shirts",
    colors: [{ name: "Black/Green", hex: "#000000" }],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "legend-level-hoodie",
    name: "Fossil Legends Hoodie",
    description: "Stay cozy and cool in our black hoodie with glow-in-the-dark dino print.",
    price: 44.99,
    image: "/lovable-uploads/fadf25dc-3f7b-41f6-91cf-6d85041fdb1b.png",
    category: "hoodies",
    colors: [{ name: "Black/Green", hex: "#000000" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "dino-snapback",
    name: "Little Logger Snapback",
    description: "Top off your look with our signature snapback featuring the classic dino logo.",
    price: 29.99,
    image: "/lovable-uploads/1758778c-3e2a-4191-9ccc-995c9bacb88c.png",
    category: "hats",
    colors: [
      { name: "Black/Green", hex: "#000000" },
      { name: "Black/Purple", hex: "#800080" }
    ]
  },
  {
    id: "legend-shorts",
    name: "Legend Shorts",
    description: "Comfy cotton shorts with our all-over dino print pattern.",
    price: 34.99,
    image: "/lovable-uploads/fcbde189-5166-40f5-8ef3-971e6b8a703a.png",
    category: "shorts",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Green", hex: "#22C55E" },
      { name: "Purple", hex: "#800080" }
    ],
    sizes: ["S", "M", "L", "XL"]
  }
];

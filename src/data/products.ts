export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  badge?: string;
  ingredients: string[];
  allergens: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Glazed Donuts",
    slug: "glazed-donuts",
    description: "Soft, fluffy donuts with a sweet glaze that melts in your mouth",
    longDescription: "Our signature glazed donuts are made fresh daily with premium ingredients. Each donut is hand-crafted to perfection, featuring a light and airy texture topped with our classic vanilla glaze. Perfect for breakfast or as a sweet treat any time of day.",
    price: 290,
    image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=800&h=600&fit=crop"
    ],
    category: "Donuts",
    badge: "Popular",
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Milk", "Yeast", "Vanilla Extract"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  },
  {
    id: 2,
    name: "Classic Berliners",
    slug: "classic-berliners",
    description: "Traditional German pastries filled with raspberry jam and dusted with sugar",
    longDescription: "Experience the authentic taste of Berlin with our traditional Berliners. These delightful pastries are filled with homemade raspberry jam and generously dusted with powdered sugar. Each Berliner is fried to golden perfection, creating a crispy exterior with a soft, pillowy interior.",
    price: 350,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612201142855-3d2d2f9c3f62?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590248556840-e2dd72b7b7fd?w=800&h=600&fit=crop"
    ],
    category: "Pastries",
    badge: "Traditional",
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Milk", "Raspberry Jam", "Powdered Sugar"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  },
  {
    id: 3,
    name: "Churros with Chocolate Dip",
    slug: "churros-chocolate-dip",
    description: "Crispy golden churros served with rich melted chocolate sauce",
    longDescription: "Indulge in our freshly made churros, crispy on the outside and soft on the inside, rolled in cinnamon sugar. Served with a generous portion of rich, velvety chocolate dipping sauce. A Spanish classic that's perfect for sharing or enjoying all by yourself!",
    price: 450,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600626335879-513dbf43bfe5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1630504389868-352569e5c779?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590248506683-c77f15b21c04?w=800&h=600&fit=crop"
    ],
    category: "Desserts",
    badge: "Must Try",
    ingredients: ["Flour", "Water", "Butter", "Eggs", "Sugar", "Cinnamon", "Dark Chocolate", "Cream"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  },
  // Cakes
  {
    id: 17,
    name: "Signature Chocolate Cake",
    slug: "signature-chocolate-cake",
    description: "Rich, moist chocolate cake with silky ganache frosting",
    longDescription: "Indulge in our decadent Signature Chocolate Cake. Made with premium cocoa and layered with silky ganache frosting, this cake is perfect for chocolate lovers. Each bite melts in your mouth with rich, intense chocolate flavor.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&h=600&fit=crop"
    ],
    category: "Cakes",
    badge: "Best Seller",
    ingredients: ["Premium Cocoa", "Flour", "Sugar", "Eggs", "Butter", "Chocolate Ganache"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  },
  {
    id: 18,
    name: "Vanilla Rainbow Cake",
    slug: "vanilla-rainbow-cake",
    description: "Light vanilla sponge with colorful buttercream layers",
    longDescription: "Brighten any celebration with our stunning Vanilla Rainbow Cake. Featuring layers of moist vanilla sponge alternating with vibrant buttercream, this cake is as beautiful as it is delicious.",
    price: 2299,
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588195538326-c5b1e5b80c6d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&h=600&fit=crop"
    ],
    category: "Cakes",
    badge: "Eggless",
    ingredients: ["Flour", "Sugar", "Butter", "Milk", "Vanilla Extract", "Buttercream", "Food Coloring"],
    allergens: ["Gluten", "Dairy"],
    inStock: true
  },
  {
    id: 19,
    name: "Red Velvet Delight",
    slug: "red-velvet-delight",
    description: "Classic red velvet with cream cheese frosting",
    longDescription: "Experience the classic elegance of our Red Velvet Delight. This stunning cake features rich, velvety layers with a hint of cocoa, topped with smooth cream cheese frosting.",
    price: 2699,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&h=600&fit=crop"
    ],
    category: "Cakes",
    badge: "Best Seller",
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Cocoa", "Red Food Coloring", "Cream Cheese"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  },
  {
    id: 20,
    name: "Lemon Zest Cake",
    slug: "lemon-zest-cake",
    description: "Fresh lemon cake with tangy lemon curd filling",
    longDescription: "Refresh your palate with our zesty Lemon Cake. Made with fresh lemon zest and filled with tangy lemon curd, it's the perfect balance of sweet and tart.",
    price: 2399,
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop"
    ],
    category: "Cakes",
    badge: "Gluten-Free",
    ingredients: ["Almond Flour", "Sugar", "Eggs", "Lemon", "Lemon Curd", "Butter"],
    allergens: ["Eggs", "Dairy", "Nuts"],
    inStock: true
  },
  // Cookies
  {
    id: 21,
    name: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    description: "Classic cookies with premium Belgian chocolate chips",
    longDescription: "Our signature Chocolate Chip Cookies are made with premium Belgian chocolate chips. Crispy on the edges, soft in the center, and loaded with chocolate goodness.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=800&h=600&fit=crop"
    ],
    category: "Cookies",
    badge: "Best Seller",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Belgian Chocolate Chips", "Vanilla"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  },
  {
    id: 22,
    name: "Sugar Cookies",
    slug: "sugar-cookies",
    description: "Buttery sugar cookies with royal icing decoration",
    longDescription: "Classic buttery sugar cookies decorated with beautiful royal icing designs. Perfect for any celebration or as a sweet everyday treat.",
    price: 1099,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&h=600&fit=crop"
    ],
    category: "Cookies",
    badge: "Eggless",
    ingredients: ["Flour", "Sugar", "Butter", "Milk", "Royal Icing"],
    allergens: ["Gluten", "Dairy"],
    inStock: true
  },
  {
    id: 23,
    name: "Oatmeal Raisin",
    slug: "oatmeal-raisin",
    description: "Chewy oats with plump raisins and warm spices",
    longDescription: "Wholesome and delicious, our Oatmeal Raisin cookies are packed with chewy oats, plump raisins, and a hint of cinnamon. A healthy indulgence!",
    price: 1199,
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590248511890-c371e743e4a4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=800&h=600&fit=crop"
    ],
    category: "Cookies",
    badge: "Vegan",
    ingredients: ["Oats", "Flour", "Raisins", "Cinnamon", "Brown Sugar", "Vegetable Oil"],
    allergens: ["Gluten"],
    inStock: true
  },
  {
    id: 24,
    name: "Double Chocolate Brownies",
    slug: "double-chocolate-brownies",
    description: "Fudgy brownies with chocolate chunks and nuts",
    longDescription: "Intensely chocolatey and incredibly fudgy, our Double Chocolate Brownies are loaded with chocolate chunks and crunchy walnuts. Pure chocolate heaven!",
    price: 1499,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590247807873-19e2c3e2654e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590248511890-c371e743e4a4?w=800&h=600&fit=crop"
    ],
    category: "Cookies",
    badge: "Best Seller",
    ingredients: ["Cocoa", "Flour", "Sugar", "Eggs", "Butter", "Chocolate Chunks", "Walnuts"],
    allergens: ["Gluten", "Eggs", "Dairy", "Nuts"],
    inStock: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

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
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop",
    images: [
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
    image: "https://images.unsplash.com/photo-1612201142855-3d2d2f9c3f62?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612201142855-3d2d2f9c3f62?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1630504389868-352569e5c779?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1630504389868-352569e5c779?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590248506683-c77f15b21c04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600626335879-513dbf43bfe5?w=800&h=600&fit=crop"
    ],
    category: "Desserts",
    badge: "Must Try",
    ingredients: ["Flour", "Water", "Butter", "Eggs", "Sugar", "Cinnamon", "Dark Chocolate", "Cream"],
    allergens: ["Gluten", "Eggs", "Dairy"],
    inStock: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

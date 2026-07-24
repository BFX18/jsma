export type JamuCategory =
  | 'Semua'
  | 'Stamina & Segar'
  | 'Pencernaan & Vitalitas'
  | 'Kebugaran & Sendi'
  | 'Imun & Detoks'
  | 'Ibu & Kesehatan';

export type JamuSize = '250ml' | '500ml';

export interface JamuProduct {
  id: string;
  name: string;
  javaneseName?: string;
  tagline: string;
  category: JamuCategory;
  price250ml: number;
  price500ml: number;
  description: string;
  benefits: string[];
  ingredients: string[];
  tasteProfile: string;
  servingSuggestion: string;
  shelfLife: string;
  bestSeller?: boolean;
  colorAccent: string; // Tailwind color class for badges/highlights
  badgeText?: string;
  imageUrl: string;
}

export interface CartItem {
  product: JamuProduct;
  size: JamuSize;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  deliveryMethod: 'instant' | 'sameday' | 'pickup' | 'express';
  notes: string;
}

export interface StoreInfo {
  name: string;
  whatsappNumber: string;
  address: string;
  openingHours: string;
}

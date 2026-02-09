
export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
};

// types.ts
export type Category = 'Cake' | 'Muffins' | 'Croissant' | 'Bread' | 'Tart' | 'Favorite';

export interface GalleryItem {
  id: number;
  category: Category;
  imageUrl: string;
  title: string;
}
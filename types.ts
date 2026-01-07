import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  name: string;
  description: string;
  url: string;
  iconName: string; // We map string to icon component dynamically
  tags: string[];
  color?: string; // Specific accent color
}

export interface SubCategory {
  id: string;
  title: string;
  items: LinkItem[];
}

export interface Category {
  id: string;
  title: string;
  subCategories: SubCategory[];
}

export type Theme = 'light' | 'dark';
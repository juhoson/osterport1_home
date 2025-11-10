export interface MenuItem {
  id: string;
  label: string;
  path: string;
  order: number;
}

export interface BoardMember {
  name: string;
  role: string;
  phone: string;
}

export interface ContentSection {
  type: 'text' | 'heading' | 'board-members' | 'image-gallery' | 'list';
  content?: string;
  level?: number; // for headings: 1-6
  items?: string[] | BoardMember[]; // for lists or board members
  images?: string[]; // for image galleries
}

export interface PageContent {
  id: string;
  title: string;
  sections: ContentSection[];
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
}
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

export interface NewsItem {
  date: string;
  title: string;
  content: string;
  updated?: string;
}

export interface ContentSection {
  type: 'text' | 'heading' | 'board-members' | 'image-gallery' | 'list' | 'news-list' | 'document-link';
  content?: string;
  level?: number; // for headings: 1-6
  items?: string[] | BoardMember[] | NewsItem[]; // for lists, board members, or news
  images?: string[]; // for image galleries
  url?: string; // for document links
  linkText?: string; // for document links
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
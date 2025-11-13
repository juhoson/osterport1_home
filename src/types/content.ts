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

export interface InfoBoxItem {
  label?: string;
  value: string;
  type?: 'address' | 'email' | 'phone' | 'text' | 'website';
}

export interface ContentSection {
  type: 'text' | 'heading' | 'board-members' | 'image-gallery' | 'list' | 'news-list' | 'document-link' | 'info-box' | 'contact-card';
  content?: string;
  title?: string; // for info-box or contact-card
  level?: number; // for headings: 1-6
  items?: string[] | BoardMember[] | NewsItem[] | InfoBoxItem[]; // for lists, board members, news, or info boxes
  images?: string[]; // for image galleries
  url?: string; // for document links
  linkText?: string; // for document links
  highlight?: boolean; // for info-box highlighting
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
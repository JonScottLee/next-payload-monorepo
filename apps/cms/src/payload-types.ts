/* tslint:disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    posts: Post;
    media: Media;
    categories: Category;
    tags: Tag;
    users: User;
  };
  globals: {
    footer: Footer;
    'main-menu': MainMenu;
  };
}
export interface Page {
  id: string;
  title: string;
  content: {
    [k: string]: unknown;
  }[];
  slug?: string;
  publishedOn: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Post {
  id: string;
  title: string;
  author?: string | User;
  category?: string | Category;
  tags?: string[] | Tag[];
  content: {
    [k: string]: unknown;
  }[];
  slug?: string;
  publishedOn: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface User {
  id: string;
  name?: string;
  photo?: string | Media;
  roles: ('admin' | 'editor' | 'public')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  alt: string;
  caption?: string;
  darkModeFallback?: string | Media;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    small?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    medium?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    large?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    small_webp?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    medium_webp?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    large_webp?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Category {
  id: string;
  name?: string;
}
export interface Tag {
  id: string;
  name?: string;
}
export interface Footer {
  id: string;
  columns: {
    heading?: string;
    navItems?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference:
          | {
              value: string | Post;
              relationTo: 'posts';
            }
          | {
              value: string | Page;
              relationTo: 'pages';
            };
        url: string;
        label: string;
      };
      id?: string;
    }[];
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface MainMenu {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference:
        | {
            value: string | Post;
            relationTo: 'posts';
          }
        | {
            value: string | Page;
            relationTo: 'pages';
          };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}

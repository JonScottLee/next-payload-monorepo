/* tslint:disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    media: Media;
    users: User;
    'reusable-content': ReusableContent;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    footer: Footer;
    'main-menu': MainMenu;
    'theme-variables': ThemeVariable;
    address: Address;
  };
}
export interface Page {
  id: string;
  title: string;
  renderTitle?: boolean;
  content?: {
    [k: string]: unknown;
  }[];
  blocks?: (
    | ICallToAction
    | IFancyTextBlock
    | IFormBlock
    | IMapBlock
    | IMediaBlock
    | IResponsiveGrid
    | ITextBlock
    | INumberTout
    | IRowBlock
    | ITestimonialBlock
    | IReusableContentBlock
  )[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  slug?: string;
  publishedOn: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface ICallToAction {
  text: {
    [k: string]: unknown;
  }[];
  textEffects?: ITextEffects;
  link: ILink;
  id?: string;
  blockName?: string;
  blockType: 'call-to-action-block';
}
export interface ITextEffects {
  fadeIn?: boolean;
  sliding?: 'none' | 'left' | 'right' | 'up' | 'down';
}
export interface ILink {
  type?: 'reference' | 'custom';
  newTab?: boolean;
  reference: {
    value: string | Page;
    relationTo: 'pages';
  };
  url: string;
  label: string;
}
export interface IFancyTextBlock {
  text: {
    [k: string]: unknown;
  }[];
  textEffects?: ITextEffects;
  id?: string;
  blockName?: string;
  blockType: 'fancy-text-block';
}
export interface IFormBlock {
  form: string | Form;
  enableIntro?: boolean;
  introContent: {
    [k: string]: unknown;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'form-block';
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface IMapBlock {
  mapQuery?: string;
  id?: string;
  blockName?: string;
  blockType: 'map-block';
}
export interface IMediaBlock {
  orientation?: 'vertical' | 'horizontal' | 'responsive';
  text: {
    [k: string]: unknown;
  }[];
  textEffects?: ITextEffects;
  image: string | Media;
  position?: 'left' | 'right';
  id?: string;
  blockName?: string;
  blockType: 'media-block';
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
export interface IResponsiveGrid {
  headerText?: {
    [k: string]: unknown;
  }[];
  trailingContent?: {
    [k: string]: unknown;
  }[];
  blocks?: (ITextBlock | ICallToAction | INumberTout | IMediaBlock | ITestimonialBlock | IReusableContentBlock)[];
  id?: string;
  blockName?: string;
  blockType: 'responsive-grid-block';
}
export interface ITextBlock {
  text: {
    [k: string]: unknown;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'text-block';
}
export interface INumberTout {
  number: number;
  numberSuffix?: string;
  countUp?: boolean;
  text: string;
  id?: string;
  blockName?: string;
  blockType: 'number-tout-block';
}
export interface ITestimonialBlock {
  headline: string;
  text: {
    [k: string]: unknown;
  }[];
  author: string;
  title?: string;
  image?: string | Media;
  id?: string;
  blockName?: string;
  blockType: 'testimonial-block';
}
export interface IReusableContentBlock {
  reusableContent: string | ReusableContent;
  id?: string;
  blockName?: string;
  blockType: 'reusable-content-block';
}
export interface ReusableContent {
  id: string;
  title: string;
  layout: ITestimonialBlock[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface IRowBlock {
  headerText?: {
    [k: string]: unknown;
  }[];
  wrap?: boolean;
  blocks?: (ITextBlock | ICallToAction | INumberTout | IMediaBlock | ITestimonialBlock)[];
  id?: string;
  blockName?: string;
  blockType: 'row-block';
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
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Footer {
  id: string;
  columns: {
    heading?: string;
    navItems?: {
      link: ILink;
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
    link: ILink;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface ThemeVariable {
  id: string;
  colors: {
    brandPrimary?: string;
    brandSecondary?: string;
    brandTertiary?: string;
    linkColor?: string;
    linkHoverColor?: string;
    linkActiveColor?: string;
  };
  layout: {
    columnGutter?: string;
    maxWidth?: string;
  };
  mapsApiKey?: string;
  analyticsSnippet?: string;
  elements: {
    Background?: string;
    Color?: string;
  };
  header: {
    Background?: string;
    Color?: string;
    linkColor?: string;
    linkHoverColor?: string;
    linkActiveColor?: string;
  };
  footer: {
    Background?: string;
    Color?: string;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Address {
  id: string;
  street: string;
  unit?: string;
  city: string;
  state: string;
  zip?: number;
  phone: number;
  email: string;
  updatedAt?: string;
  createdAt?: string;
}

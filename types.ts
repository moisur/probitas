export interface NavItem {
  label: string;
  href: string;
}

export interface ScrollProgressProps {
  progress: number;
}

export interface StyledWord {
  text: string;
  style?: 'bold' | 'italic' | 'underline' | 'circle' | 'none';
}

export interface Testimonial {
  id: string | number;
  name?: string; // keeping for backward compat if needed, though snippet uses author
  role?: string; // keeping for backward compat
  words: StyledWord[];
  author: string;
  imageUrl: string;
}

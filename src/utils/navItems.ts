export type NavKey = 'home' | 'blog' | 'archive';

export const NAV_ITEMS: Array<{ key: NavKey; href: string }> = [
  { key: 'home', href: '/' },
  { key: 'blog', href: '/blog/' },
  { key: 'archive', href: '/blog/archive/' },
];


import { Sparkles, Download, ShieldCheck } from 'lucide-react';

export const SOCIAL_LINKS = {
  payhip: "https://payhip.com/jxffx",
  tiktok: "https://www.tiktok.com/@jx.ffx",
  instagram: "https://www.instagram.com/jx.ffx/",
  youtube: "https://www.youtube.com/@jx.ffxtutorials",
};

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'Full Pack' | 'Asset' | 'Tutorial' | 'Upcoming';
  image: string;
  features: string[];
  popular?: boolean;
  comingSoon?: boolean;
  note?: string;
  link?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'all-presets',
    title: 'All My Presets',
    description: 'All presets I use for my editing that are mine. Updating every once in a while with new content.',
    price: '£24.00',
    category: 'Full Pack',
    image: 'https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1j2ptjgnn111k1v9t9h61tn3gur.png',
    features: [
      '46 + 15 New Presets',
      '17+ Color Corrections',
      'Includes Upload Tutorial'
    ],
    popular: true,
    note: 'For After Effects 2023+',
    link: 'https://payhip.com/b/ZqEut'
  },
  {
    id: 'rainbow-watermark',
    title: 'Rainbow Watermark',
    description: 'This is the watermark I use at the end of my OLD videos. You will receive a transparent .MOV file.',
    price: '£4.50',
    category: 'Asset',
    image: 'https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1j2ptrtp5stl1deo1vr8geo7p1r.png',
    features: [
      'Transparent .MOV File', 
      'Project File NOT Included', 
      'Short Names / Initials Only'
    ],
    note: 'Check if .MOV works on your software',
    link: 'https://payhip.com/b/nmOM4'
  },
  {
    id: 'export-settings',
    title: 'Export Settings',
    description: 'Struggling with low quality or fps issues on your TikTok posts? This tutorial covers the export settings I use to improve video quality and boost engagement.',
    price: '£4.00',
    category: 'Tutorial',
    image: 'https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1j2pu1jo4100ab1f3fcbm1fevr.png',
    features: ['Fix Low Quality', 'Boost Engagement'],
    link: 'https://payhip.com/b/uUReX'
  },
  {
    id: 'editing-pack-v2',
    title: 'Editing Pack V2',
    description: 'In the works.',
    price: 'Coming Soon',
    category: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1620641788421-7f1c338e61a9?q=80&w=1000&auto=format&fit=crop',
    features: ['In The Works'],
    comingSoon: true,
  }
];

export const FEATURES = [
  {
    title: "Instant Delivery",
    description: "You get the files right after purchasing.",
    icon: Download,
  },
  {
    title: "DMCA Protected",
    description: "Original files. Protected by DMCA.",
    icon: ShieldCheck,
  },
];
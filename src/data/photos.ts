import photo1 from '../assets/profile/photo-1.jpg';
import photo2 from '../assets/profile/photo-2.jpg';
import photo3 from '../assets/profile/photo-3.jpg';
import photo4 from '../assets/profile/photo-4.jpg';
import photo5 from '../assets/profile/photo-5.jpg';
import photo6 from '../assets/profile/photo-6.jpg';
import photo7 from '../assets/profile/photo-7.jpg';
import photo8 from '../assets/profile/photo-8.jpg';
import photo9 from '../assets/profile/photo-9.jpg';
import photo10 from '../assets/profile/photo-10.jpg';
import photo11 from '../assets/profile/photo-11.jpg';
import type { ImageMetadata } from 'astro';

export type ProfilePhoto = {
  src: ImageMetadata;
  alt: string;
  title: string;
  caption: string;
};

export const photos: ProfilePhoto[] = [
  {
    src: photo1,
    alt: 'AyiTess home renovation advert with a decorator on a ladder and the phone number 07535 063226',
    title: 'Home renovation',
    caption: 'Painting, repairs, and the work that gets a room ready to live in.',
  },
  {
    src: photo6,
    alt: 'AyiTess handyman service advert showing a tool belt and a list of repair jobs',
    title: 'Handyman',
    caption: 'Flat packs, jet washing, plastering, painting, and snagging are on the handyman list.',
  },
  {
    src: photo7,
    alt: 'Square AyiTess handyman advert with a tool belt, shown as a poster and on a phone',
    title: 'Handyman visits',
    caption: 'The same handyman offer, set out for a phone screen.',
  },
  {
    src: photo10,
    alt: 'AyiTess property maintenance advert with a drill and a tool belt',
    title: 'Property maintenance',
    caption: 'Lists for landlords, shops, and houses that need more than one small fix.',
  },
  {
    src: photo4,
    alt: 'AyiTess moving advert with two men loading boxes into a van',
    title: 'Moving',
    caption: 'House moves, man and van, student moves, packing, and longer runs.',
  },
  {
    src: photo11,
    alt: 'AyiTess home and office transfer advert with movers carrying a chest of drawers',
    title: 'Home and office transfer',
    caption: 'Furniture taken out, moved, and set down in the next place.',
  },
  {
    src: photo5,
    alt: 'AyiTess waste clearance advert with a photo of a garden full of rubbish waiting to be collected',
    title: 'Clearance',
    caption: 'House, office, shop, and garden clearances. Non-hazardous waste only.',
  },
  {
    src: photo2,
    alt: 'AyiTess IT recycling advert showing old computers and screens in a skip',
    title: 'IT recycling',
    caption: 'Old computers, screens, and office kit collected for recycling.',
  },
  {
    src: photo3,
    alt: 'AyiTess scaffolding and netting advert with a scaffolded building',
    title: 'Scaffolding and netting',
    caption: 'Access and netting for work off the ground.',
  },
  {
    src: photo8,
    alt: 'AyiTess advert stating that services are offered all over the United Kingdom',
    title: 'Where we work',
    caption: 'Day-to-day work is based in Barnsley. Longer moves are booked across the UK.',
  },
  {
    src: photo9,
    alt: 'AyiTess advert inviting people to join as staff or subcontractors',
    title: 'Joining the crew',
    caption: 'AyiTess has asked for staff and subcontractors, sole traders and firms.',
  },
];

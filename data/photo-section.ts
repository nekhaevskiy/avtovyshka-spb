import { ReactImageGalleryItem } from 'react-image-gallery';

const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL || '';
const ORIGINAL_TRANSFORM = 'f_auto,c_limit,h_630,w_1120';
const THUMBNAIL_TRANSFORM = 'f_auto,c_thumb,g_auto,h_84,w_150';
const originalPrefix = `${CLOUDINARY_URL}${ORIGINAL_TRANSFORM}`;
const thumbnailPrefix = `${CLOUDINARY_URL}${THUMBNAIL_TRANSFORM}`;

export const images: ReactImageGalleryItem[] = [
  {
    original: `${originalPrefix}/photo-section/01.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/01.jpg`,
    originalAlt: 'Автовышка 1',
    thumbnailAlt: 'Миниатюра автовышки 1',
  },
  {
    original: `${originalPrefix}/photo-section/02.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/02.jpg`,
    originalAlt: 'Автовышка 2',
    thumbnailAlt: 'Миниатюра автовышки 2',
  },
  {
    original: `${originalPrefix}/photo-section/03.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/03.jpg`,
    originalAlt: 'Автовышка 3',
    thumbnailAlt: 'Миниатюра автовышки 3',
  },
  {
    original: `${originalPrefix}/photo-section/04.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/04.jpg`,
    originalAlt: 'Автовышка 4',
    thumbnailAlt: 'Миниатюра автовышки 4',
  },
  {
    original: `${originalPrefix}/photo-section/05.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/05.jpg`,
    originalAlt: 'Автовышка 5',
    thumbnailAlt: 'Миниатюра автовышки 5',
  },
  {
    original: `${originalPrefix}/photo-section/06.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/06.jpg`,
    originalAlt: 'Автовышка 6',
    thumbnailAlt: 'Миниатюра автовышки 6',
  },
  {
    original: `${originalPrefix}/photo-section/07.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/07.jpg`,
    originalAlt: 'Автовышка 7',
    thumbnailAlt: 'Миниатюра автовышки 7',
  },
  {
    original: `${originalPrefix}/photo-section/08.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/08.jpg`,
    originalAlt: 'Автовышка 8',
    thumbnailAlt: 'Миниатюра автовышки 8',
  },
  {
    original: `${originalPrefix}/photo-section/09.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/09.jpg`,
    originalAlt: 'Автовышка 9',
    thumbnailAlt: 'Миниатюра автовышки 9',
  },
  {
    original: `${originalPrefix}/photo-section/10.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/10.jpg`,
    originalAlt: 'Автовышка 10',
    thumbnailAlt: 'Миниатюра автовышки 10',
  },
  {
    original: `${originalPrefix}/photo-section/11.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/11.jpg`,
    originalAlt: 'Автовышка 11',
    thumbnailAlt: 'Миниатюра автовышки 11',
  },
  {
    original: `${originalPrefix}/photo-section/12.jpg`,
    thumbnail: `${thumbnailPrefix}/photo-section/12.jpg`,
    originalAlt: 'Автовышка 12',
    thumbnailAlt: 'Миниатюра автовышки 12',
  },
];

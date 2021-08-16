import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ImageGallery, SectionHeading } from '..';
import { images } from '../../data/photo-section';

function PhotoSection() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl"
      data-testid="photo-section"
      id="photo-section"
    >
      <SectionHeading heading="Наша техника за работой" />
      <ImageGallery items={images} lazyLoad />
    </section>
  );
}

export { PhotoSection };

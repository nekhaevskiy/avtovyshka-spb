import React from 'react';
import useInView from 'react-cool-inview';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ImageGallery, SectionHeading } from '..';
import { images } from '../../data/photo-section';

function PhotoSection() {
  // We use `react-cool-inview` due to performance reasons
  const { observe, inView } = useInView({
    rootMargin: '50px',
    unobserveOnEnter: true,
  });

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-8"
      data-testid="photo-section"
      id="photo-section"
    >
      <SectionHeading heading="Наша техника за работой" />
      <div ref={observe}>
        {inView && <ImageGallery items={images} lazyLoad />}
      </div>
    </section>
  );
}

export { PhotoSection };

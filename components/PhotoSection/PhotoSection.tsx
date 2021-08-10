import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { SectionHeading } from '..';
import { images } from '../../data/photo-section';

function PhotoSection() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl"
      data-testid="photo-section"
      id="photo-section"
    >
      <SectionHeading heading="Наша техника за работой" />
      <ReactImageGallery items={images} lazyLoad />
    </section>
  );
}

export { PhotoSection };

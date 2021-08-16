import React from 'react';
import ReactImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';

interface Props extends ReactImageGalleryProps {
  className?: string;
  dataTestid?: string;
}

function ImageGallery({ className, dataTestid, ...props }: Props) {
  return (
    <div
      className={className ? className : undefined}
      data-testid={dataTestid ? dataTestid : undefined}
    >
      <ReactImageGallery {...props} />
    </div>
  );
}

export { ImageGallery };

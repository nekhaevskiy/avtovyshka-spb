import ReactImageGallery from 'react-image-gallery';
import { IVehiclePhoto } from '../../data/vehicles';

interface Props {
  items: IVehiclePhoto[];
}

function VehiclePhoto({ items }: Props) {
  return (
    <div
      className="mb-4 md:mr-1 md:w-1/2 lg:mr-2 xl:mr-4"
      data-testid="vehicle-photo"
    >
      <ReactImageGallery items={items} lazyLoad />
    </div>
  );
}

export { VehiclePhoto };

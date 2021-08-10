import ReactImageGallery from 'react-image-gallery';
import { IVehiclePhoto } from '../../data/vehicles';

interface Props {
  items: IVehiclePhoto[];
}

function VehiclePhoto({ items }: Props) {
  return (
    <div data-testid="vehicle-photo">
      <ReactImageGallery items={items} lazyLoad />
    </div>
  );
}

export { VehiclePhoto };

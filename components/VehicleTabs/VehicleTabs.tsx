import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Table } from '..';
import { Vehicle } from '../../data/vehicles';

// Dynamic import is needed to prevent the following error in the console:
// Warning: Prop id did not match. Server: "react-tabs-20" Client: "react-tabs-0"
// https://github.com/reactjs/react-tabs/issues/56
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);

function VehicleTabs({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div data-testid="vehicle-tabs" className="mb-6 mx-auto px-4 max-w-6xl">
      <Tabs className="mx-auto max-w-md md:max-w-none">
        <TabList>
          <Tab>
            <div className="flex">
              <Image
                src="/icons/tools.svg"
                alt="Технические характеристики"
                width="20"
                height="20"
              />
              <span className="hidden ml-2 font-medium md:inline">
                Технические характеристики
              </span>
            </div>
          </Tab>
          <Tab>
            <div className="flex">
              <Image
                src="/icons/open-book.svg"
                alt="Подробное описание"
                width="20"
                height="20"
              />
              <span className="hidden ml-2 font-medium md:inline">
                Подробное описание
              </span>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <h3 className="mb-3 text-center text-gray-800 text-xl font-semibold md:hidden">
            Подробные технические характеристики
          </h3>
          <Table data={vehicle.fullSpecs} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export { VehicleTabs };
import dynamic from 'next/dynamic';
import React from 'react';
import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ImageGallery, Table } from '..';
import { Vehicle } from '../../data/vehicles';

// Dynamic import is needed to prevent the following error in the console:
// Warning: Prop id did not match. Server: "react-tabs-20" Client: "react-tabs-0"
// https://github.com/reactjs/react-tabs/issues/56
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);

function VehicleTabs({ vehicle }: { vehicle: Vehicle }) {
  const { fullSpecs, technicalPhotos, detailedDescription } = vehicle;
  return (
    <div data-testid="vehicle-tabs" className="mx-auto mb-6 max-w-6xl px-4">
      <Tabs className="mx-auto max-w-md md:max-w-none">
        <TabList>
          <Tab>
            <div className="flex">
              {/* Reasons: `/README.md#using-nextimage-for-svg-files` */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tools.svg"
                alt="Технические характеристики"
                width="20"
                height="20"
              />
              <span className="ml-2 hidden font-medium md:inline">
                Технические характеристики
              </span>
            </div>
          </Tab>
          <Tab>
            <div className="flex">
              {/* Reasons: `/README.md#using-nextimage-for-svg-files` */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/open-book.svg"
                alt="Подробное описание"
                width="20"
                height="20"
              />
              <span className="ml-2 hidden font-medium md:inline">
                Подробное описание
              </span>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <h3 className="mb-3 text-center text-xl font-semibold text-gray-800 md:hidden">
            Подробные технические характеристики
          </h3>
          <div className="md:flex">
            <div className="mb-6 md:mb-0 md:mr-1 md:w-1/2 lg:mr-2 xl:mr-4">
              <Table data={fullSpecs} />
            </div>
            {technicalPhotos && technicalPhotos.length > 0 ? (
              <ImageGallery
                items={technicalPhotos}
                lazyLoad
                showPlayButton={technicalPhotos.length > 1}
                className="md:ml-1 md:w-1/2 lg:ml-2 xl:ml-4"
              />
            ) : null}
          </div>
        </TabPanel>
        <TabPanel>
          {detailedDescription.map((item, index) => (
            <p key={index} className="mb-2 text-gray-800">
              {item}
            </p>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export { VehicleTabs };

import { SectionHeading } from '..';
import { services } from '../../data/service-section';

interface Props {
  img: string;
  heading: string;
  text: string;
}

function ServiceCard({ img, heading, text }: Props) {
  return (
    <article className="mb-4 mx-2 p-4 max-w-xs text-center border border-gray-300 rounded shadow">
      {/* Reasons: `/README.md#using-nextimage-for-svg-files` */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={heading} width="50" height="50" className="mx-auto" />
      <h3 className="mb-2 mt-3 text-gray-800 text-xl font-bold">{heading}</h3>
      <p className="text-gray-800">{text}</p>
    </article>
  );
}

function ServiceSection() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl"
      data-testid="service-section"
      id="service-section"
    >
      <SectionHeading heading="Что мы предлагаем" />
      <div className="flex flex-row flex-wrap items-stretch justify-center -mx-2 lg:justify-around">
        {services.map((service) => (
          <ServiceCard
            key={service.heading}
            heading={service.heading}
            img={service.img}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
}

export { ServiceSection };

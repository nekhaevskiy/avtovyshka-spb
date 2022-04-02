import { SectionHeading } from '..';
import { services } from '../../data/service-section';

interface Props {
  img: string;
  heading: string;
  text: string;
}

function ServiceCard({ img, heading, text }: Props) {
  return (
    <article className="mx-2 mb-4 max-w-xs rounded border border-gray-300 p-4 text-center shadow">
      {/* Reasons: `/README.md#using-nextimage-for-svg-files` */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={heading} width="50" height="50" className="mx-auto" />
      <h3 className="mb-2 mt-3 text-xl font-bold text-gray-800">{heading}</h3>
      <p className="text-gray-800">{text}</p>
    </article>
  );
}

function ServiceSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-8"
      data-testid="service-section"
      id="service-section"
    >
      <SectionHeading heading="Что мы предлагаем" />
      <div className="-mx-2 flex flex-row flex-wrap items-stretch justify-center lg:justify-around">
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

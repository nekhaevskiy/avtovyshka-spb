import Image from 'next/image';
import { SectionHeading } from '..';
import { services } from '../../data/services';

interface Props {
  img: string;
  heading: string;
  text: string;
}

function ServiceCard({ img, heading, text }: Props) {
  return (
    <article className="mb-4 mx-2 p-4 max-w-xs text-center border border-gray-300 rounded shadow">
      <Image src={img} alt={heading} width="50" height="50" />
      <h3 className="mb-2 mt-3 text-gray-800 text-xl font-bold">{heading}</h3>
      <p className="text-gray-800">{text}</p>
    </article>
  );
}

function Service() {
  return (
    <section
      className="mx-auto px-4 py-8 max-w-6xl"
      data-testid="service"
      id="service"
    >
      <SectionHeading heading="Что мы предлагаем" />
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center sm:-mx-2 lg:items-stretch lg:justify-around">
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

export { Service };

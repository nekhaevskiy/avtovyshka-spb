interface Props {
  heading: string;
  subheading: string;
}

function SectionHeading({ heading, subheading }: Props) {
  return (
    <h2 className="mb-6 pb-3 text-gray-800 text-2xl font-bold border-b border-gray-300">
      {heading}{' '}
      <small className="block text-gray-500 text-lg font-normal sm:inline-block sm:align-baseline">
        {subheading}
      </small>
    </h2>
  );
}

export { SectionHeading };

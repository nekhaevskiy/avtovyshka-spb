interface Props {
  heading: string;
  subheading?: string;
}

function SectionHeading({ heading, subheading }: Props) {
  return (
    <h2 className="mb-6 border-b border-gray-300 pb-3 text-2xl font-bold text-gray-800">
      {heading}
      {subheading ? (
        <>
          {' '}
          <small className="block text-lg font-normal text-gray-500 sm:inline-block sm:align-baseline">
            {subheading}
          </small>
        </>
      ) : null}
    </h2>
  );
}

export { SectionHeading };

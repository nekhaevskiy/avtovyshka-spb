import Slider from 'react-slick';
import { SectionHeading } from '..';
import { Review, reviews } from '../../data/review-section';
import styles from './ReviewSection.module.css';

interface Props {
  review: Review;
}

function Slide({ review }: Props) {
  return (
    <article className="flex px-2">
      <span
        className="h-10 w-10 flex-shrink-0 rounded-full bg-red-500 bg-quote bg-center bg-no-repeat"
        style={{ backgroundSize: 22 }}
      />
      <div className="ml-3">
        <h3 className="mb-2 text-lg font-bold text-gray-800">
          {review.author}
        </h3>
        <p className="text-gray-800">{review.text}</p>
      </div>
    </article>
  );
}

function ReviewSection() {
  return (
    <section
      className="bg-gray-100"
      data-testid="review-section"
      id="review-section"
    >
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-8">
        <SectionHeading heading="Отзывы наших клиентов" />

        <Slider
          arrows={false}
          className={styles.carousel}
          dots
          responsive={[
            {
              breakpoint: 639,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 959,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
              },
            },
          ]}
          slidesToScroll={3}
          slidesToShow={3}
        >
          {reviews.map((review) => (
            <Slide review={review} key={review.author} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export { ReviewSection };

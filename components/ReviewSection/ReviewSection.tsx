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
        className="flex-shrink-0 w-10 h-10 bg-red-500 bg-quote bg-center bg-no-repeat rounded-full"
        style={{ backgroundSize: 22 }}
      />
      <div className="ml-3">
        <h3 className="mb-2 text-gray-800 text-lg font-bold">
          {review.author}
        </h3>
        <p className="text-gray-800">{review.text}</p>
      </div>
    </article>
  );
}

function ReviewSection() {
  return (
    <section className="bg-gray-100" data-testid="reviews" id="reviews">
      <div className="mx-auto pb-12 pt-8 px-4 max-w-6xl">
        <SectionHeading heading="Отзывы наших клиентов" />

        <Slider
          arrows={false}
          className={styles.carousel}
          dots
          responsive={[
            {
              breakpoint: 640,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 960,
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

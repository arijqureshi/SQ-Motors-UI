import { useState, useEffect } from 'react';
import reviewsData from '../data/reviews.json';

interface Review {
  id: number;
  author: string | null;
  rating: number;
  date: string;
  vehicle: string | null;
  review: string;
}

function shuffleAndPick<T>(array: T[], count: number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function normalizeLabel(value: string | null | undefined, fallback: string) {
  const cleaned = value?.replace(/\s+/g, ' ').trim();
  if (!cleaned || cleaned.toLowerCase() === 'null') {
    return fallback;
  }
  return cleaned;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => {
  const authorName = review.author;
  const vehicleName = review.vehicle || ".";

  return (
    <article className="h-full flex flex-col bg-gray-800 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.rating} />
        <time className="text-sm text-gray-400" dateTime={review.date}>
          {formatDate(review.date)}
        </time>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4 flex-1">{review.review}</p>
      <div className="mt-auto pt-4 border-t border-gray-700">
        <p className="font-semibold text-white">{authorName}</p>
        <p className="text-sm text-red-400">{vehicleName}</p>
      </div>
    </article>
  );
};

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);

  useEffect(() => {
    const loadReviews = async () => {
      const delay = Math.random() * 1500 + 500; // 0.5–2 seconds
      await new Promise((resolve) => setTimeout(resolve, delay));
      setDisplayedReviews(shuffleAndPick(reviewsData as Review[], 6));
      setIsLoading(false);
    };
    loadReviews();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our customers are saying about their experience at SQ Motors. 
            We're proud to help car enthusiasts find their perfect ride.
          </p>
        </div>
      </section>

      {/* Reviews grid or loading */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <svg
                className="w-12 h-12 text-red-600 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Loading reviews"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="mt-4 text-gray-500">Loading reviews...</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayedReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm mt-8">
                Showing 6 randomly selected reviews from our customers. Refresh the page to see more!
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reviews;

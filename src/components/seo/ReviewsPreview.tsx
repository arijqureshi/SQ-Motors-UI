import { Link } from 'react-router-dom';
import reviewsData from '../../data/reviews.json';

type ReviewRecord = {
  id: number;
  author: string | null;
  rating: number;
  review: string;
};

const previewReviews = (reviewsData as ReviewRecord[]).slice(0, 3);

const ReviewsPreview = () => {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Customer Highlights</h2>
        <Link to="/reviews" className="text-sm font-semibold text-red-600 hover:text-red-700">
          Read all reviews
        </Link>
      </div>
      <ul className="grid md:grid-cols-3 gap-4">
        {previewReviews.map((item) => (
          <li key={item.id} className="rounded-md border border-gray-100 bg-gray-50 p-4">
            <p className="text-sm text-gray-500 mb-2">Rating: {item.rating}/5</p>
            <p className="text-sm text-gray-700 mb-3">{item.review}</p>
            <p className="text-sm font-semibold text-gray-900">{item.author ?? 'SQ Motors Customer'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReviewsPreview;

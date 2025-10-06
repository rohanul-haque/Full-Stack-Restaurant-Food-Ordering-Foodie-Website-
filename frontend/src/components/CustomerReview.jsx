import { customer_reviews } from "@/assets/assets";
import SectionTitle from "./SectionTitle";

function CustomerReview() {
  return (
    <section className="mt-20">
      <SectionTitle
        title={" 🌟 Customer Reviews 🌟"}
        description={`See what our happy customers are saying about our restaurant! 🍽️💬`}
      />

      {/* ✅ reviews grid */}
      <div className="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mt-10">
        {customer_reviews.slice(0, 10).map((review, index) => (
          <div
            key={index}
            className="border-gray-200 shadow-xs p-6 rounded-xl break-inside-avoid border"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = anonymousFallbackImage;
                }}
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {review.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {review.title}
                </p>
              </div>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReview;

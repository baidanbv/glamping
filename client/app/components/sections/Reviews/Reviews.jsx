import {useState, useEffect } from "react";
import Title from "@/components/ui/Title/Title"
import { useReviews } from "@/store";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const reviews = useReviews((state) => state.reviews);
  const loadReviews = useReviews((state) => state.loadReviews);
  const [loading, setLoading] = useState(true);
  
 useEffect(() => {
    const fetchReviews = async () => {
      await loadReviews();
      setLoading(false); 
    };

    fetchReviews();
  }, [loadReviews]);
  
   if (loading) {
    return (<p>Loading reviews...</p>); 
  }

  return (
    <section className="px-5 flex flex-col gap-8 py-10 w-full max-w-[1160px] mx-auto">
      <Title title="Vores gæster udtaler" />
      <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap sm:justify-center md:gap-6 md:justify-between lg:gap-0">
        {reviews.map((review) => {
          return <SingleReview key={review._id} review={review} />;
        })}
      </div>
    </section>
  );
}

export default Reviews
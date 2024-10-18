
const SingleReview = ({ review }) => {
  return (
    <div className="rounded-tl-[50px] rounded-br-[50px] bg-secondary px-5 py-10 text-center sm:max-w-xs md:w-[45%] lg:w-[30%] lg:mb-10">
      <div className="font-zen text-2xl">
        <span>{review.name},</span>
        <span> {review.age} år</span>
      </div>
      <h3 className=" text-2xl  mb-5">Har været på {review.stay}</h3>
      <p className="text-[15px]">{review.review}</p>
    </div>
  );
};

export default SingleReview
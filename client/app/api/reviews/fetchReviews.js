import axios from 'axios';

 const fetchReviews = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/reviews`);

    return response.data.data;
  } catch (error) {
    throw new Error('Error while getting reviews: ' + error.message);
  }
};

export default fetchReviews
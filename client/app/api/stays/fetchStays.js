import axios from 'axios';

const fetchStays = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/stays`);

    return response.data.data;
  } catch (error) {
    throw new Error('Error while getting stays: ' + error.message);
  }
};

export default fetchStays
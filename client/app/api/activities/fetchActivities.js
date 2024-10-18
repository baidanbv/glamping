import axios from 'axios';


const fetchActivities = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/activities`);

    return response.data.data;
  } catch (error) {
    throw new Error('Error while getting activities: ' + error.message);
  }
};

export default fetchActivities
import axios from 'axios';

const fetchActivityById = async (activityId) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/activity/${activityId}`);

    return response.data.data[0];
  } catch (error) {
    throw new Error('Error while deleting activity: ' + error.message);
  }
};

export default fetchActivityById
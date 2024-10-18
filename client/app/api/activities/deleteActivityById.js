import axios from 'axios';

 const token = localStorage.getItem('token');

const deleteActivityById = async (activityId) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_PATH}/activity/${activityId}`,  {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while deleting activity: ' + error.message);
  }
};

export default deleteActivityById
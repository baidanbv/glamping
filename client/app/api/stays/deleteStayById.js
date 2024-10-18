import axios from 'axios';

const token = localStorage.getItem('token');

const deleteStayById = async (activityId) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_PATH}/stay/${activityId}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while deleting stay: ' + error.message);
  }
};

export default deleteStayById;

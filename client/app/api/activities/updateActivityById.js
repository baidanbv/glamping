import axios from 'axios';

 const token = localStorage.getItem('token');


const updateActivityById = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_PATH}/activity`, data, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while updating activity: ' + error.message);
  }
};

export default updateActivityById;



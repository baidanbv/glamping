import axios from 'axios';

  const token = localStorage.getItem('token');

const createNewActivity = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_PATH}/activity`, data,  {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while creating contact: ' + error.message);
  }
};

export default createNewActivity;

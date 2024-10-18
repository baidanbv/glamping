import axios from 'axios';

const token = localStorage.getItem('token');

const updateStayById = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_PATH}/stay`, data, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while updating stay: ' + error.message);
  }
};

export default updateStayById;

import axios from 'axios';


 const token = localStorage.getItem('token');
 
const createNewStay = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_PATH}/stay`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while creating stay: ' + error.message);
  }
};

export default createNewStay;

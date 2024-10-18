import axios from 'axios';

const token = localStorage.getItem('token');

const updateMemberById = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_PATH}/user`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while updating user: ' + error.message);
  }
};

export default updateMemberById;



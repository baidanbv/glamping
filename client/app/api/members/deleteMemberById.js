import axios from 'axios';

const token = localStorage.getItem('token');
const deleteMemberById = async (memberId) => {
  if (!token) {
    throw new Error('Authorization token is missing.');
  }

  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_PATH}/user/${memberId}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Error while deleting member: ' + error.message);
  }
};

export default deleteMemberById;

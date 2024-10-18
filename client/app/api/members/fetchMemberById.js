import axios from 'axios';

const fetchMemberById = async (memberId) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/user/${memberId}`);
    
    return response.data.data;
  } catch (error) {
    throw new Error('Error while deleting user: ' + error.message);
  }
};

export default fetchMemberById
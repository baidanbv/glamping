import axios from 'axios';


const fetchMembers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/users`);

    return response.data.data;
  } catch (error) {
    throw new Error('Error while getting Members: ' + error.message);
  }
};

export default fetchMembers
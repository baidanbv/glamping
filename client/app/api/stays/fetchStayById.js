import axios from 'axios';

const fetchStayById = async (id) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/stay/${id}`);
    
    return response.data.data[0];
  } catch (error) {
    throw new Error(`Error while getting stay by ${id}: ` + error.message);
  }
};

export default fetchStayById
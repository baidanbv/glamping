import axios from 'axios';

const getAllContacts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/contacts`);

    return response.data.data;
  } catch (error) {
    throw new Error('Error while getting contacts: ' + error.message);
  }
};

export default getAllContacts;



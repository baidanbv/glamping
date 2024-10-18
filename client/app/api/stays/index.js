import fetchStays from './fetchStays';
import updateStayById from './updateStayById';
import createNewStay from './createNewStay';
import fetchStayById from './fetchStayById';
import deleteStayById from './deleteStayById';

export const staysAPI = {
  fetchStays,
  createNewStay,
  fetchStayById,
  updateStayById,
  deleteStayById
};
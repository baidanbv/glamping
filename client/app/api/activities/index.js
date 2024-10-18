import fetchActivities from './fetchActivities';
import fetchActivityById from './fetchActivityById';
import deleteActivityById from './deleteActivityById';
import createNewActivity from './createNewActivity';
import updateActivityById from './updateActivityById';

export const activitiesAPI = {
  fetchActivities,
  fetchActivityById,
  deleteActivityById,
  createNewActivity,
  updateActivityById
};
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { activitiesAPI } from '@/api';

const useActivities = create(
  devtools((set) => ({
    activities: [],
    loadActivities: async () => {
      try {
        const activities = await activitiesAPI.fetchActivities();
        set({ activities }); 
      } catch (error) {
        console.error('Error loading activities:', error);
      }
    }
  }))
);

export default useActivities;

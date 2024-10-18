import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { staysAPI } from '@/api';

const useStays = create(
  devtools((set) => ({
    stays: [],
    loadStays: async () => {
      try {
        const stays = await staysAPI.fetchStays();
        set({ stays }); 
      } catch (error) {
        console.error('Error loading stays:', error);
      }
    }
  }))
);

export default useStays;

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { membersAPI } from '@/api';

const useMembers = create(
  devtools((set) => ({
    members: [],
    loadMembers: async () => {
      try {
        const members = await membersAPI.fetchMembers();
        set({ members }); 
      } catch (error) {
        console.error('Error loading members:', error);
      }
    }
  }))
);

export default useMembers;

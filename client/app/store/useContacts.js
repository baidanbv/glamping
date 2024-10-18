import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { contactsAPI } from '@/api';

const useContacts = create(
  devtools((set) => ({
    contacts: [],
    loadContacts: async () => {
      try {
        const contacts = await contactsAPI.getAllContacts();
        set({ contacts });
      } catch (error) {
        console.error('Error loading contacts:', error);
      }
    }
  }))
);

export default useContacts;

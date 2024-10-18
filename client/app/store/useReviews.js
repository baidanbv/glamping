import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { reviewsAPI } from '@/api';

const useReviews = create(
  devtools((set) => ({
    reviews: [],
    loadReviews: async () => {
      try {
        const reviews = await reviewsAPI.fetchReviews();
        set({ reviews }); 
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    }
  }))
);

export default useReviews;

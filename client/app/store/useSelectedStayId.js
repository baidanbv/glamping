import { create } from 'zustand';

export const useSelectedStayId = create((set) => ({
  selectedStayId: null, 
  setSelectedStayId: (id) => set({ selectedStayId: id }) 
}));


export default useSelectedStayId;
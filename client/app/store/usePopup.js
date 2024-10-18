import { create } from 'zustand';

const usePopup = create((set) => ({
  createFormModal: false,
  updateFormModal: false,
  id: null,

  openCreatePopup: () => set({ createFormModal: true }),
  closeCreatePopup: () => set({ createFormModal: false }),

  openUpdatePopup: (id) => set({ updateFormModal: true, id }),
  closeUpdatePopup: () => set({ updateFormModal: false, id: null })
}));

export default usePopup;

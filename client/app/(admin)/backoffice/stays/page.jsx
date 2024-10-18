'use client';
import { AnimatePresence } from 'framer-motion';

import { staysAPI } from '@/api';
import { useStays, usePopup } from '@/store';
import { useEffect, useState } from 'react';
import ModalPopup from '@/components/ui/ModalPopup/ModalPopup';
import CreateStay from '@/components/ui/Forms/CreateStay/CreateStay';
import UpdateStay from '@/components/ui/Forms/UpdateStay/UpdateStay';

const Page = () => {
  const stays = useStays((state) => state.stays);
  const loadStays = useStays((state) => state.loadStays);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const token = localStorage.getItem('token');


  const { createFormModal, updateFormModal, id, openCreatePopup, closeCreatePopup, openUpdatePopup, closeUpdatePopup } = usePopup();


  const deleteStay = async (id) => {
    try {
      setLoading(true);
      await staysAPI.deleteStayById(id,token);
      loadStays();
    } catch (err) {
      setError('Could not delete stay.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = () => {
    loadStays();
  }

  useEffect(() => {
    loadStays();
  }, [loadStays]);

  return (
    <div className="relative">
      <button className="bg-accent outline-none py-2 px-5 rounded-sm cursor-pointer absolute right-5 top-0 font-nanum" onClick={openCreatePopup}>
        Create New
      </button>
      <h1 className="capitalize font-nanum text-3xl mb-5">Stays</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {stays.map((stay) => (
          <div key={stay._id} className="flex justify-between items-center border-b py-2">
            <h3 className="text-2xl">{stay.title}</h3>
            <div className="flex gap-5 text-xl">
              <button className="bg-accent outline-none px-3 rounded-sm cursor-pointer" onClick={() => openUpdatePopup(stay._id)}>
                Update
              </button>
              <button className="bg-[#f44336] outline-none px-3 rounded-sm cursor-pointer" onClick={() => deleteStay(stay._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {createFormModal && (
          <ModalPopup handlePopup={closeCreatePopup}>
            <CreateStay onSuccess={handleSuccess}  token={token}/>
          </ModalPopup>
        )}
        {updateFormModal && (
          <ModalPopup handlePopup={closeUpdatePopup}>
            <UpdateStay stayId={id} onSuccess={handleSuccess} token={token} />
          </ModalPopup>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;

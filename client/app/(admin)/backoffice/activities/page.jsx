'use client';
import { AnimatePresence } from 'framer-motion';

import { activitiesAPI } from '@/api';
import { useActivities, usePopup } from '@/store';
import { useEffect, useState } from 'react';
import ModalPopup from '@/components/ui/ModalPopup/ModalPopup';
import CreateActivity from '@/components/ui/Forms/CreateActivity/CreateActivity';
import UpdateActivity from '@/components/ui/Forms/UpdateActivity/UpdateActivity';

const Page = () => {
  const activities = useActivities((state) => state.activities);
  const loadActivities = useActivities((state) => state.loadActivities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  
  const { createFormModal, updateFormModal, id, openCreatePopup, closeCreatePopup, openUpdatePopup, closeUpdatePopup } = usePopup();
  
  const deleteActivity = async (id) => {
    try {
      setLoading(true);
      await activitiesAPI.deleteActivityById(id, token);
      loadActivities();
    } catch (err) {
      setError('Could not delete activity.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = () => {
    loadActivities();
  }

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  return (
    <div className="relative">
      <button className="bg-accent outline-none py-2 px-5 rounded-sm cursor-pointer absolute right-5 top-0 font-nanum" onClick={openCreatePopup}>
        Create New
      </button>
      <h1 className="capitalize font-nanum text-3xl mb-5">activities</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {activities.map((activity) => (
          <div key={activity._id} className="flex justify-between items-center border-b py-2">
            <h3 className="text-2xl">{activity.title}</h3>
            <div className="flex gap-5 text-xl">
              <button className="bg-accent outline-none px-3 rounded-sm cursor-pointer" onClick={() => openUpdatePopup(activity._id)}>
                Update
              </button>
              <button className="bg-[#f44336] outline-none px-3 rounded-sm cursor-pointer" onClick={() => deleteActivity(activity._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {createFormModal && (
          <ModalPopup handlePopup={closeCreatePopup}>
            <CreateActivity  onSuccess={handleSuccess} token={token}/>
          </ModalPopup>
        )}
        {updateFormModal && (
          <ModalPopup handlePopup={closeUpdatePopup} >
            <UpdateActivity activityId={id} onSuccess={handleSuccess} token={token} />
          </ModalPopup>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;

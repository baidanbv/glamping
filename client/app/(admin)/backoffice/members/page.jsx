'use client';
import { AnimatePresence } from 'framer-motion';

import { membersAPI } from '@/api';
import { useMembers, usePopup } from '@/store';
import { useEffect, useState } from 'react';
import ModalPopup from '@/components/ui/ModalPopup/ModalPopup';
import CreateMember from '@/components/ui/Forms/CreateMember/CreateMember';
import UpdateMember from '@/components/ui/Forms/UpdateMember/UpdateMember';

const Page = () => {
  const members = useMembers((state) => state.members);
  const loadMembers = useMembers((state) => state.loadMembers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { createFormModal, updateFormModal, id, openCreatePopup, closeCreatePopup, openUpdatePopup, closeUpdatePopup } = usePopup();
 
  const token = localStorage.getItem('token');

  const deleteMember = async (id) => {
    try {
      setLoading(true);
      await membersAPI.deleteMemberById(id, token);
      loadMembers();
    } catch (err) {
      setError('Could not delete Member.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccess = () => {
    loadMembers();
  };

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  return (
    <div className="relative">
      <button className="bg-accent outline-none py-2 px-5 rounded-sm cursor-pointer absolute right-5 top-0 font-nanum" onClick={openCreatePopup}>
        Add New
      </button>
      <h1 className="capitalize font-nanum text-3xl mb-5">Members</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {members.map((member) => (
          <div key={member._id} className="flex justify-between items-center border-b py-2">
            <h3 className="text-2xl">{member.name}</h3>
            <div className="flex gap-5 text-xl">
              <button className="bg-accent outline-none px-3 rounded-sm cursor-pointer" onClick={() => openUpdatePopup(member._id)}>
                Update
              </button>
              <button className="bg-[#f44336] outline-none px-3 rounded-sm cursor-pointer" onClick={() => deleteMember(member._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {createFormModal && (
          <ModalPopup handlePopup={closeCreatePopup}>
            <CreateMember onSuccess={handleSuccess} token={token} />
          </ModalPopup>
        )}
        {updateFormModal && (
          <ModalPopup handlePopup={closeUpdatePopup}>
            <UpdateMember memberId={id} onSuccess={handleSuccess} token={token} />
          </ModalPopup>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;

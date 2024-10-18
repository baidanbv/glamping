import deleteMemberById from './deleteMemberById';
import addNewMember from './addNewMember';
import updateMemberById from './updateMemberById';
import fetchMemberById from './fetchMemberById';
import fetchMembers from './fetchMembers';

export const membersAPI = {
  fetchMembers,
  addNewMember,
  fetchMemberById,
  updateMemberById,
  deleteMemberById,
};
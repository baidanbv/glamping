import { useForm } from 'react-hook-form';
import { membersAPI } from '@/api';
import { usePopup } from '@/store';

const CreateMember = ({ onSuccess, token }) => {
  const { closeCreatePopup } = usePopup();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    await membersAPI.addNewMember(data, token);
    closeCreatePopup();
    reset();
    onSuccess();
  };

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center">Add New Member</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full mx-auto">
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input {...register('name', { required: 'Name is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`} id="activity" type="text" placeholder="Enter name" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm  mb-2" htmlFor="email">
            Email
          </label>
          <input {...register('email', { required: 'Email is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`} id="email" type="email" autoComplete="username" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block  text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input {...register('password', { required: 'Password is required' })} autoComplete="current-password" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`} id="password" type="password" />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="role">
            Role
          </label>
          <select {...register('role', { required: 'Role is required' })} defaultValue="guest" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.role ? 'border-red-500' : ''}`} id="role">
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-secondary py-2 px-4 rounded focus:outline-none focus:shadow-outline font-nanum" type="submit">
            Add member
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateMember;

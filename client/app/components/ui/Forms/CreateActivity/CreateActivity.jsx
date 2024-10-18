import { useForm } from 'react-hook-form';
import { activitiesAPI } from '@/api';
import { usePopup } from '@/store';

const CreateActivity = ({ onSuccess,token }) => {
  const { closeCreatePopup } = usePopup();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    await activitiesAPI.createNewActivity(data, token);
    closeCreatePopup();
    reset();
    onSuccess()
  };

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center">Add activity</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full mx-auto">
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="title">
            Activity title
          </label>
          <input {...register('title', { required: 'Title is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`} id="activity" type="text" placeholder="Enter title" />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm  mb-2" htmlFor="date">
            Date
          </label>
          <input {...register('date', { required: 'Date is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.date ? 'border-red-500' : ''}`} id="date" type="text" />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block  text-sm mb-2" htmlFor="time">
            Time
          </label>
          <input {...register('time', { required: 'Time is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.time ? 'border-red-500' : ''}`} id="time" type="text" />
          {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block  text-sm mb-2" htmlFor="description">
            Description
          </label>
          <textarea {...register('description', { required: 'Description is required' })} className={`min-h-[150px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`} id="description" placeholder="Enter description" />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>
        
        <div className="flex items-center justify-center">
          <button className="bg-secondary py-2 px-4 rounded focus:outline-none focus:shadow-outline font-nanum" type="submit">
            Add new activity
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateActivity;

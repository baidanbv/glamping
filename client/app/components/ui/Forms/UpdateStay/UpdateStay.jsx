'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { staysAPI } from '@/api';
import { usePopup } from '@/store';

const UpdateStay = ({ stayId, onSuccess, token }) => {
  const { closeUpdatePopup } = usePopup();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const updatedData = {
      id: stayId,
      ...data
    };

    await staysAPI.updateStayById(updatedData, token);
    closeUpdatePopup();
    onSuccess();
  };

  useEffect(() => {
    const fetchStay = async () => {
      setLoading(true);
      const stayData = await staysAPI.fetchStayById(stayId);
      reset(stayData);
      setLoading(false);
    };
    fetchStay();
  }, [stayId, reset]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center">Update Stay</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full mx-auto">
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="title">
            Stay title
          </label>
          <input {...register('title', { required: 'Title is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`} id="activity" type="text" placeholder="Enter title" />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm  mb-2" htmlFor="numberOfPersons">
            Number of persons
          </label>
          <input {...register('numberOfPersons', { required: 'Number of persons is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.date ? 'border-red-500' : ''}`} id="numberOfPersons" type="text" />
          {errors.numberOfPersons && <p className="text-red-500 text-xs mt-1">{errors.numberOfPersons.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block  text-sm mb-2" htmlFor="price">
            Price
          </label>
          <input {...register('price', { required: 'Price is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`} id="price" type="number" />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block  text-sm mb-2" htmlFor="description">
            Description
          </label>
          <textarea {...register('description', { required: 'Description is required' })} className={`min-h-[150px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`} id="description" placeholder="Enter description" />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="includes">
            Includes
          </label>
          <input {...register('includes', { required: 'Includes is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.includes ? 'border-red-500' : ''}`} id="includes" type="text" placeholder="Enter items separated by comma" />
          {errors.includes && <p className="text-red-500 text-xs mt-1">{errors.includes.message}</p>}
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-secondary py-2 px-4 rounded focus:outline-none focus:shadow-outline font-nanum" type="submit">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateStay;

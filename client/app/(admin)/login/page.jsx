'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_PATH}/auth/signin`, {
        email,
        password
      });

      localStorage.setItem('token', response.data.data.token);
      router.push('/backoffice');
    } catch (err) {
      setError('Login error. Check the data.');
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-5">Login to Admin Panel</h1>
      <form onSubmit={handleSubmit(handleLogin)} className="max-w-lg w-full mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 w-full">
          <label className="block text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input {...register('email', { required: 'Email is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`} id="email" type="email" placeholder="Enter email" autoComplete="username" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4 w-full">
          <label className="block text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input {...register('password', { required: 'Password is required' })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`} id="password" type="password" placeholder="Enter password" autoComplete="current-password" />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button className="bg-secondary py-2 px-8 rounded focus:outline-none focus:shadow-outline font-nanum" type="submit">
          Login
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Page;

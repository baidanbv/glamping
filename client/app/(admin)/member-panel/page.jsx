'use client';

import { BiSolidWinkSmile } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const page = () => {
  const [guestName, setGuestName] = useState('');
   useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setGuestName(decodedToken.name || 'Guest'); 
    }
   }, []);
  
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <h1 className="text-5xl">Howdy, { guestName}</h1>
      <BiSolidWinkSmile  className="text-5xl"/>
  </div>
  )
}

export default page
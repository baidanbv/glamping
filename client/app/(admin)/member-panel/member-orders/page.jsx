'use client';

import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useContacts } from '@/store';
import OrdersTemplate from '@/components/ui/OrdersTemplate/OrdersTemplate';

const page = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const contacts = useContacts((state) => state.contacts);
  const loadContacts = useContacts((state) => state.loadContacts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');

      return;
    }
    const decodedToken = jwtDecode(token);
    setUserEmail(decodedToken.email);
  }, [router]);

  const filteredContacts = contacts.filter((contact) => contact.email === userEmail);

    console.log(filteredContacts)

  useEffect(() => {
     const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      await loadContacts();
    } catch (err) {
      setError('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };
    fetchContacts();
  }, []);

  {
    loading && <p className="fixed left-0 top-0 flex items-center justify-center text-3xl w-screen h-screen">Loading contacts...</p>;
  }

  {
    error && <p className="text-red-500">Error loading contacts</p>;
  }
  
  return (
    <div className="flex flex-col gap-5 h-full">
      <h1 className="text-5xl">Orders</h1>
      {filteredContacts.length > 0 ? (
          <OrdersTemplate orders={filteredContacts} />
      ) : (
        'You don`t have orders yet.'
      )}
    </div>
  );
}

export default page
"use client"
import { useEffect, useState, useCallback } from 'react';
import { useContacts } from '@/store';
import OrdersTemplate from '@/components/ui/OrdersTemplate/OrdersTemplate';


const page = () => {
  
   const contacts = useContacts((state) => state.contacts);
  const loadContacts = useContacts((state) => state.loadContacts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await loadContacts();
    } catch (err) {
      setError('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  }, [loadContacts]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  { loading && <p>Loading contacts...</p> }
  
  {error && <p className="text-red-500">Error loading contacts</p>}

  return (
    <div className="">
      <h1 className="text-5xl capitalize mb-6">orders</h1>
      {contacts.length > 0 ? (
        <OrdersTemplate orders={contacts} />
      ):
      "You don`t have orders yet."}
    </div>
  );
};

export default page;

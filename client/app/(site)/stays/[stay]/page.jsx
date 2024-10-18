'use client';
import Link from 'next/link';

import { staysAPI } from '@/api';
import { useSelectedStayId } from '@/store';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection/HeroSection';

const SingleStayPage = () => {
  const [stay, setStay] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const selectedStayId = useSelectedStayId((state) => state.selectedStayId);
  const setSelectedStayId = useSelectedStayId((state) => state.setSelectedStayId);

  useEffect(() => {
    const storedStayId = localStorage.getItem('selectedStayId');
    if (storedStayId) {
      setSelectedStayId(storedStayId); 
    } else {
      setError('Stay ID not found in local storage');
    }
  }, [setSelectedStayId]);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedStayId) return;

      try {
        const data = await staysAPI.fetchStayById(selectedStayId);
        setStay(data);
        setLoading(false);
      } catch (err) {
        setError('Error loading data about stay');
        setLoading(false); 
      }
    };

    if (selectedStayId) {
      fetchData();
    }
  }, [selectedStayId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!stay) return <p>Stay не найден</p>;

  return (
    <>
      <HeroSection imageUrl={stay.image} title={stay.title} opacity={55} />
      <section className="text-center relative bg-dark pb-12 pt-0  before:content-[''] before:block before:bg-dark before:w-[100%] before:h-[51px] before:top-[-50px] before:rounded-tl-[50px] before:absolute">
        <h2 className="text-5xl px-8 text-center mb-3">Tag væk en weekend, med én du holder af</h2>
        <p className="text-base text-center px-4 mb-6">{stay.description}</p>
        <ul className="text-[14px] text-center mb-6">
          {stay.includes.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <p className="text-2xl text-center font-zen mb-10">Pris {stay.price},-</p>
        <Link href="/contact" className=" text-3xl py-4 px-12 bg-secondary rounded-tl-[50px] rounded-br-[50px] transition-all duration-300 ease-in-out hover:rounded-tr-[50px] hover:rounded-bl-[50px] hover:rounded-tl-none hover:rounded-br-none">
          Book nu
        </Link>
      </section>
    </>
  );
};

export default SingleStayPage;

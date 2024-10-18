'use client';
import { useState, useEffect } from 'react';
import { useActivities } from '@/store';

import HeroSection from '@/components/sections/HeroSection/HeroSection';
import PageInfo from '@/components/sections/PageInfo/PageInfo';
import SingleActivity from '@/components/sections/Activities/SingleActivity';
import  Link  from 'next/link';

const heroImageBg = '/images/hero-section/favorite.jpg';

const page = () => {
  const [loading, setLoading] = useState(true);
  const favoriteList = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoriteAmount = favoriteList.length || 0;

  const activities = useActivities((state) => state.activities);
  const loadActivities = useActivities((state) => state.loadActivities);
 const favoriteActivities = activities.filter((item) => favoriteList.includes(item._id));

 useEffect(() => {
   const fetchActivities = async () => {
     try {
       setLoading(true); 
       await loadActivities();
     } finally {
       setLoading(false); 
     }
   };

   fetchActivities();
 }, [loadActivities]);

 {
    loading && <p className="fixed left-0 top-0 flex items-center justify-center text-3xl w-screen h-screen">Loading ...</p>;
  }

  return (
    <>
      <HeroSection imageUrl={heroImageBg} title="Min liste" opacity={70} />
      <PageInfo title="Antal aktiviteter på listen:" description={favoriteAmount} isFavoritePage={true} />
      {favoriteActivities.length > 0 ? (
        <div className="flex flex-col gap-12 my-10  sm:justify-center sm:items-center lg:flex-row lg:flex-wrap lg:justify-evenly w-full max-w-[1160px] mx-auto">
          {favoriteActivities.map((activity) => (
            <SingleActivity key={activity._id} activity={activity} />
          ))}
        </div>
      ) : (
        <div className="my-10 mx-auto text-center">
          <p className="text-xl">Ingen aktiviteter på listen</p>
          <span>Gå til </span>
          <Link href="/">hjemmesiden</Link>
        </div>
      )}
    </>
  );
};

export default page;



'use client';

import { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { GrFormNext } from 'react-icons/gr';

const SingleActivity = ({ activity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

 

  const showDescription = () => {
    setIsOpen((prev) => !prev);
   };

  const toggleFavorite = () => {
    const favoriteActivities = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavorites = favoriteActivities.filter((id) => id !== activity._id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favoriteActivities.push(activity._id);
      localStorage.setItem('favorites', JSON.stringify(favoriteActivities));
      setIsFavorite(true);
    }
  };

   useEffect(() => {
    const favoriteActivities = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favoriteActivities.includes(activity._id)) {
      setIsFavorite(true);
    }
  }, [activity._id]);

  return (
    <>
      <div className="font-zen text-3xl text-center relative min-h-[500px] flex flex-col  items-center justify-center sm:w-4/5 md:w-3/5 lg:w-1/3">
        <div className="rounded-tl-[50px] rounded-br-[50px] bg-accent px-5 py-2 text-center mx-5 absolute top-0 z-10 w-full max-w-[340px]">
          <h3 className="py-3 w-full">{activity.title}</h3>
        </div>
        <img src={activity.image} alt={activity.title} className="absolute h-[300px] w-full object-cover bottom-28 sm:rounded-md" />
        <div className={`w-full max-w-[340px] absolute bottom-0 text-3xl py-4 px-5 bg-dark rounded-tl-[50px] rounded-br-[50px] overflow-hidden transition-height duration-300 ease-in-out ${isOpen ? ' h-[380px]' : ' h-[225px]'}`}>
          <div className="flex justify-between items-start w-full mb-5">
            <div className="flex flex-col items-start text-md">
              <span>{activity.date}</span>
              <span>kl. {activity.time}</span>
            </div>
            <span className="bg-[#587e87] text-dark text-[20px] px-3 py-2 rounded-tl-[10px] rounded-br-[10px] cursor-pointer" onClick={toggleFavorite}>
              {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
            </span>
          </div>
          <button onClick={showDescription} className="text-2xl text-primary py-2 px-6 border border-primary w-full rounded-tl-[50px] rounded-br-[50px] flex justify-center items-center gap-2 mb-6 transition-all duration-300 ease-in-out hover:rounded-tr-[50px] hover:rounded-bl-[50px] hover:rounded-tl-none hover:rounded-br-none">
            Læs mere <GrFormNext className={`${isOpen ? '-rotate-90' : 'rotate-90'}`} />
          </button>
          <p className="text-[15px] leading-none">{activity.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleActivity;

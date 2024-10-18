import { useStays } from "@/store";
import { useEffect } from "react";
import SingleStay from './SingleStay';

const Stays = () => {
  const stays = useStays((state) => state.stays);
  const loadStays = useStays((state) => state.loadStays);
  
  useEffect(() => {
    loadStays(); 
  }, [loadStays]);
  
  return (
    <section className="flex flex-col gap-12 py-10 sm:justify-center sm:items-center lg:flex-row lg:flex-wrap lg:justify-evenly w-full max-w-[1160px] mx-auto">
        {stays.map((stay) => {
          return <SingleStay key={stay._id} stay={stay} />;
        })}
    </section>
  );
}

export default Stays
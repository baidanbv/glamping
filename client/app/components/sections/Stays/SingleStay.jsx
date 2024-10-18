import { useSelectedStayId } from '@/store/';

import Link from 'next/link';

const SingleStay = ({ stay }) => {
 const setSelectedStayId = useSelectedStayId((state) => state.setSelectedStayId);
  
 const handleSelectStayId = () => {
   setSelectedStayId(stay._id); 
    localStorage.setItem('selectedStayId', stay._id);
  };

  return (
    <>
      <div className="font-zen text-3xl text-center relative min-h-[450px] flex flex-col items-center justify-center sm:w-4/5 md:w-3/5 lg:w-1/3">
        <div className="rounded-tl-[50px] rounded-br-[50px] bg-accent px-5 py-2 text-center mx-5 absolute top-0 z-10 w-[100%] max-w-[340px]">
          <h3 className=" w-[100%]">{stay.title}</h3>
          <p>{stay.numberOfPersons} personer</p>
          <p>Fra {stay.price},-</p>
        </div>
        <img src={stay.image} alt={stay.title} className="absolute h-[300px] w-[100%] object-cover bottom-10 sm:rounded-md" />
        <Link href={`/stays/${stay.title.toLowerCase().replace(/\s+/g, '-')}`} className="absolute bottom-0 text-3xl py-4 px-6 bg-secondary rounded-tl-[50px] rounded-br-[50px] transition-all duration-300 ease-in-out hover:rounded-tr-[50px] hover:rounded-bl-[50px] hover:rounded-tl-none hover:rounded-br-none" onClick={handleSelectStayId}>
          Læs mere
        </Link>
      </div>
    </>
  );
};

export default SingleStay;

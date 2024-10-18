'use client';

import Link from 'next/link';
import { useClientName } from '@/store';

const SuccessMessage = ({ clientName }) => {

  const setClientNameStore = useClientName((state) => state.setClientName);
  const handlePopup = () => {
    setClientNameStore('');
  }
  return (
    <div className="bg-[#2A4F57] fixed z-50 top-0 left-0 bottom-0 w-screen h-screen flex items-center justify-center flex-col gap-5 px-14">
      <h3 className="text-2xl text-center">Hej {clientName}, Tak for din besked! Du hører fra os snarest.</h3>
      <Link href="/contact" className=" text-3xl py-4 px-12 bg-secondary rounded-tl-[50px] rounded-br-[50px]" onClick={handlePopup}>
        Tilbage
      </Link>
    </div>
  );
};

export default SuccessMessage;

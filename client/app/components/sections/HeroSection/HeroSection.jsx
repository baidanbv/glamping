'use client';

import {usePathStore} from '@/store';
import Logo from '@/components/ui/Logo/Logo';
import Link from 'next/link';

const HeroSection = ({ imageUrl, title, opacity }) => {
  const currentPathName = usePathStore((state) => state.currentPathName);
  const isHomePage = currentPathName === '/';

  return (
    <>
      {isHomePage ? (
        <section className="relative pt-[180px] pb-[150px] overflow-y-hidden" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-[#818181]" style={{ opacity: opacity / 100 }}></div>
          <div className="flex justify-center ">
            <Logo width={72} height={72} />
          </div>
          <h1 className="text-7xl text-center relative z-10 w-[80%] mx-auto mb-14">{title}</h1>
          <div className="text-center">
            <Link href="/contact" className="relative z-10 uppercase text-4xl py-5 px-16 border rounded-tl-[50px] rounded-br-[50px] transition-all duration-300 ease-in-out hover:rounded-tr-[50px] hover:rounded-bl-[50px] hover:rounded-tl-none hover:rounded-br-none">
              BOOK NU
            </Link>
          </div>
        </section>
      ) : (
        <section className="relative py-[240px] overflow-y-hidden" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-[#363636]" style={{ opacity: opacity / 100 }}></div>

          <h1 className="text-7xl text-center relative z-10">{title}</h1>
        </section>
      )}
    </>
  );
};

export default HeroSection;

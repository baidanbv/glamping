'use client';

import {usePathStore} from '@/store';
import Button from '@/components/ui/Button/Button';
import  Link  from 'next/link';

const PageInfo = ({ title, description, isFavoritePage = false }) => {
  const currentPathName = usePathStore((state) => state.currentPathName);
  const isHomePage = currentPathName === '/';
  const sectionImageUrl = '/images/homepage/gitte.jpg';
  
  return (
    <section className="relative bg-dark pb-12 pt-0  rounded-br-[50px] before:content-[''] before:block before:bg-dark before:w-[100%] before:h-[51px] before:top-[-50px] before:rounded-tl-[50px] before:absolute">
      <h2 className="text-5xl px-8 text-center mb-3">{title}</h2>
      
        <p className={`text-center px-4 mb-4 ${isFavoritePage ? 'text-5xl' : 'text-base'} max-w-[1160px] mx-auto`}>
          {description}
        </p>

      {isHomePage && (
        <div className="flex flex-col justify-center gap-6 items-center max-w-[1160px] mx-auto">
          <img src={sectionImageUrl} className="w-[180px] h-[180px] rounded-[100%] object-cover" />
          <Link href="/stays"><Button title="SE VORES OPHOLD" /></Link>
        </div>
      )}
    </section>
  );
};

export default PageInfo;

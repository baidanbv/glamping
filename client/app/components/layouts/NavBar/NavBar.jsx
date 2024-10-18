'use client';
import { usePathStore, usePopup } from '@/store';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Link from 'next/link';
import navbar from '@/helpers/navbar';
import ModalPopup from '@/components/ui/ModalPopup/ModalPopup';

const NavBar = () => {

  const { openCreatePopup, closeCreatePopup } = usePopup();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPathName = usePathStore((state) => state.currentPathName);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPathName]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-14 h-10 z-40 text-[30px]">
        {isMenuOpen ? (
          <span className="flex justify-center items-center w-[100%] h-[100%]" onClick={handleMenu}>
            <MdClose className="hover:cursor-pointer hover:text-dark transition-all" />
          </span>
        ) : (
          <span className="bg-secondary flex justify-center items-center w-12 h-10 rounded-br-[25px] rounded-tl-[25px] transition-all hover:rounded-br-[0px] hover:rounded-tl-[0px] hover:rounded-bl-[25px] hover:rounded-tr-[25px] hover:cursor-pointer hover:text-dark" onClick={handleMenu}>
            <MdMenu />
          </span>
        )}
      </div>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {isMenuOpen && (
          <ModalPopup handlePopup={closeCreatePopup} isMobileMenu={true}>
           
            <nav className={`flex justify-center  transition-transform duration-300 ease-in-out`}>
              <ul>
                {navbar.map((item, index) => {
                  const isActive = currentPathName === item.url;
                  return (
                    <li key={index} className="text-[36px] lg:text-[42px]">
                      <Link href={item.url} className={`transition-colors ${isActive ? 'text-dark' : 'text-white'} hover:text-dark`}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </ModalPopup>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

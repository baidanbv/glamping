'use client';
import {  useEffect } from 'react';

import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const Backdrop = ({ children, handlePopup, isMobileMenu = false }) => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div onClick={handlePopup} className={`fixed z-20 top-0 left-0 w-[100%] h-[100%] flex justify-center items-center ${isMobileMenu ? 'bg-secondary' : 'bg-[rgba(42,79,87,0.9)]'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};


export default Backdrop;

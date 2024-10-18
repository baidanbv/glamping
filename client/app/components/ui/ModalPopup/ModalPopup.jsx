import { motion } from 'framer-motion';
import Backdrop from '@/components/ui/Backdrop/Backdrop';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 50,
      stiffness: 500
    }
  },
  exit: {
    y: '-100vh',
    opacity: 0 
  }
};


const ModalPopup = ({ handlePopup, children, isMobileMenu }) => {
  return (
    <Backdrop handlePopup={handlePopup} isMobileMenu={isMobileMenu}>
      <motion.div onClick={(e) => e.stopPropagation()} className=" max-h-[90vh] w-full px-2 sm:p-5 sm:min-w-[50%] md:overflow-y-auto xl:max-w-[30%] 2xl:min-w-[60%] max-w-sm rounded-lg bg-white" variants={dropIn} initial="hidden" animate="visible" exit="exit">
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default ModalPopup;

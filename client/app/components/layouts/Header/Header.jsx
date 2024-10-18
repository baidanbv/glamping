'use client';

import { usePathStore } from '@/store';
import Logo from '@/components/ui/Logo/Logo';
import NavBar from '@/components/layouts/NavBar/NavBar';
import  Wrapper  from '@/components/ui/Wrapper/Wrapper';

const Header = () => {
  const currentPathName = usePathStore((state) => state.currentPathName);
  const isHomePage = currentPathName === '/';

  return (
    <header className="absolute top-0 w-[100%] z-50">
      <Wrapper>
        <div className={`w-[100%] py-5 flex  items-center ${isHomePage ? 'justify-end' : 'justify-between'} `}>
          {isHomePage ? '' : <Logo />}

          <NavBar />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

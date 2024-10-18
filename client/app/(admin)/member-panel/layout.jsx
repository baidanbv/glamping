'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Page = ({ children }) => {
  const router = useRouter();
  const currentPathName = usePathname(); 

  const handleLogOut = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <div className="min-h-screen grid grid-rows-layout grid-cols-layout">
      <header className="bg-dark text-white h-[100px] flex items-center justify-between px-12 row-start-1 col-start-1 col-end-3">
        <div className="flex items-center gap-5 px-6">
          <Link href="/member-panel" className={`text-xl ${currentPathName === '/member-panel' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
            Admin Panel
          </Link>
          <Link href="/" className={`text-xl`}>
            Homepage
          </Link>
        </div>
        <MdOutlineLogout className="cursor-pointer" onClick={handleLogOut} />
      </header>

      <aside className="bg-[#2A4F57] h-full py-6 px-10 row-start-2 col-start-1">
        <Link href="/member-panel/member-orders" className={`text-2xl block ${currentPathName === '/member-panel/member-orders' ? 'text-accent' : 'text-white'} hover:text-accent`}>
          Orders
        </Link>
        <Link href="/member-panel/member-favorites" className={`text-2xl block ${currentPathName === '/member-panel/member-favorites' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
          Favorites
        </Link>
      </aside>

      <main className="p-10 row-start-2 col-start-2 bg-background">{children}</main>

      <footer className="bg-dark text-white h-[100px] flex items-center justify-center row-start-3 col-start-1 col-end-3">© 2024 Backoffice</footer>
    </div>
  );
};

export default Page;

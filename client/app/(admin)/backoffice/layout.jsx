'use client';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const BackofficeLayout = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [userRole, setUserRole] = useState('');
  const currentPathName = usePathname(); 

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    const decodedToken = jwtDecode(token);
    setUserRole(decodedToken.role);
    
    
    if (decodedToken.role === 'guest') {
      router.push('/member-panel');
      return;
    }

    setAuthorized(true);
  }, [router]);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (!authorized) {
    return <p className="fixed left-0 top-0 flex items-center justify-center text-3xl w-screen h-screen">Loading...</p>;
  }

  return (
    <div className="min-h-screen grid grid-rows-layout grid-cols-layout">
      <header className="bg-dark text-white h-[100px] flex items-center justify-between px-12 row-start-1 col-start-1 col-end-3">
        <div className="flex items-center gap-5 px-6">
          <Link href="/backoffice" className={`text-2xl ${currentPathName === '/backoffice' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
            Backoffice
          </Link>
          <Link href="/" className="text-xl">
            Homepage
          </Link>
        </div>
        <MdOutlineLogout className="cursor-pointer" onClick={handleLogOut} />
      </header>

      {userRole === 'admin' && (
        <aside className="bg-[#2A4F57] h-full py-6 px-10 row-start-2 col-start-1">
          <Link href="/backoffice/activities" className={`text-2xl block ${currentPathName === '/backoffice/activities' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
            Activities
          </Link>
          <Link href="/backoffice/stays" className={`text-2xl block ${currentPathName === '/backoffice/stays' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
            Stays
          </Link>
          <Link href="/backoffice/orders" className={`text-2xl block ${currentPathName === '/backoffice/orders' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
            Orders
          </Link>
          <Link href="/backoffice/members" className={`text-2xl block ${currentPathName === '/backoffice/members' ? 'text-accent' : 'text-white'}  hover:text-accent`}>
            Members
          </Link>
        </aside>
      )}

      <main className="p-10 row-start-2 col-start-2 bg-background">{children}</main>

      <footer className="bg-dark text-white h-[100px] flex items-center justify-center row-start-3 col-start-1 col-end-3">© 2024 Backoffice</footer>
    </div>
  );
};

export default BackofficeLayout;

'use client';

import { usePathStore } from '@/store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useGetCurrentUrl = () => {
  const setPathname = usePathStore((state) => state.setPathname);
  const currentPathname = usePathname();

  useEffect(() => {
    setPathname(currentPathname);
  }, [currentPathname, setPathname]);

  return null;
};

export default useGetCurrentUrl;

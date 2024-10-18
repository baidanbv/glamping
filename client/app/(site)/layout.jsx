'use client';

import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';
import useGetCurrentUrl from '@/hooks/useGetCurrentUrl';
import SuccessMessage from '@/components/ui/SuccessMessage/SuccessMessage';
import { useClientName } from '@/store';

export default function SiteLayout({ children }) {
  useGetCurrentUrl();
  const clientName = useClientName((state) => state.currentClientName);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      {clientName !== '' && <SuccessMessage clientName={clientName} />}
    </>
  );
}

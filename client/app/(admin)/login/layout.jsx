"use client";

import Link from "next/link";

const BackofficeLayout = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col">
  <header className="bg-dark text-white h-[100px] flex items-center justify-between px-12">
    <Link href="/" className="text-xl">Homepage</Link>
  </header>

  <main className="flex-grow p-10 bg-background">{children}</main>

  <footer className="bg-dark text-white h-[100px] flex items-center justify-center">
    © 2024 Backoffice
  </footer>
</div>
  );
};

export default BackofficeLayout;

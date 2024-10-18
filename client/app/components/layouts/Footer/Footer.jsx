"use client"
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import Link  from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#2A4F57] py-10 px-10">
      <div className="flex gap-5 items-center justify-center mb-6">
        <Link href="http://www.facebook.com">
          <IoLogoFacebook className="w-16 h-16" />
        </Link>
        <Link href="http://www.instagram.com">
          <IoLogoInstagram className="w-16 h-16" />
        </Link>
      </div>
      <Link href="/" className="flex gap-5 items-center justify-center">
        <Image width={50} height={50} src="/images/logo.png" alt="Glamping logo" />
        <span className="text-4xl font-zen"> Gittes Glamping</span>
      </Link>
    </footer>
  );
}

export default Footer
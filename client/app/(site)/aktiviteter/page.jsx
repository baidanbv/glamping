"use client"

import Activities from '@/components/sections/Activities/Activities';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import PageInfo from '@/components/sections/PageInfo/PageInfo';

const heroImageBg = '/images/hero-section/Aktiviteter.jpg';

const page = () => {
  return (
    <>
      <HeroSection imageUrl={heroImageBg} title="Aktiviteter" opacity={70} />
      <PageInfo title="Ingen skal kede sig hos Gitte" description="Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker." />
      <Activities />
    </>
  );
};

export default page;

'use client';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import PageInfo from '@/components/sections/PageInfo/PageInfo';
import Reviews from '@/components/sections/Reviews/Reviews';

const heroImageBg = '/images/hero-section/homepage.jpg';

const HomePage = () => {
  return (
    <>
      <HeroSection imageUrl={heroImageBg} title="Gittes Glamping" opacity={80} />
      <PageInfo
        title="Vi har ophold til enhver smag"
        description="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.
        Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
      />
      <Reviews />
    </>
  );
};

export default HomePage;

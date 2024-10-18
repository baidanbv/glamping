"use client"

import HeroSection from '@/components/sections/HeroSection/HeroSection';
import PageInfo from '@/components/sections/PageInfo/PageInfo';
import Stays from '@/components/sections/Stays/Stays';

const heroImageBg = '/images/hero-section/ophold.jpg';

const page = () => {
  return (
    <>
      <HeroSection imageUrl={heroImageBg} title="Vores ophold" opacity={55} />
      <PageInfo
        title="Vi har ophold til enhver smag"
        description="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. 
        Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
      />
      <Stays />
    </>
  );
};

export default page;

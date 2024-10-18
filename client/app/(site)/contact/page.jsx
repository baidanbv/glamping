import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ContactForm from '@/components/ui/Forms/ContactForm/ContactForm';

const heroImageBg = '/images/hero-section/contact.jpg';

const page = () => {
  return (
    <>
      <HeroSection imageUrl={heroImageBg} title="Kontakt Gitte" opacity={70} />
      <section className="text-center relative bg-dark pb-12 pt-0  before:content-[''] before:block before:bg-dark before:w-[100%] before:h-[51px] before:top-[-50px] before:rounded-tl-[50px] before:absolute w-full ">
        <h2 className="text-5xl px-8 text-center">Vil du booke et ophold?</h2>
        <h2 className="text-5xl px-8 text-center mb-5">Eller har du blot et spørgsmål?</h2>
        <p className="text-base text-center px-4 mb-8 max-w-[1160px] mx-auto">Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer.</p>
        <ContactForm/>
      </section>
    </>
  );
};

export default page;

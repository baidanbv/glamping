"use client"
import { useClientName } from '@/store';
import sendContactForm from '@/api/contact/sendContactForm';
import { useForm } from 'react-hook-form';


const ContactForm = () => {
  const  clientName = useClientName((state) => state.setClientName);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sendContactForm(data)
     reset();
     clientName(data.name)
  };

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 px-5 max-w-[600px] mx-auto">
      <label htmlFor="name">Navn</label>
      <input id="name" {...register('name', { required: true })} className="border border-primary bg-dark  rounded-full px-4 py-2 outline-none" />
      {errors.name && <p className="text-red-500 text-[12px]">Dette felt er obligatorisk</p>}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register('email', { required: true })} className="border border-primary bg-dark  rounded-full px-4 py-2 outline-none" />
      {errors.email && <p className="text-red-500 text-[12px]">Dette felt er obligatorisk</p>}

      <label htmlFor="subject">Hvad drejer henvendelsen sig om?</label>
      <input id="subject" {...register('subject', { required: true })} className="border border-primary bg-dark  rounded-full px-4 py-2 outline-none" />
      {errors.subject && <p className="text-red-500 text-[12px]">Dette felt er obligatorisk</p>}

      <label htmlFor="message">Besked</label>
      <textarea id="message" {...register('message', { required: true })} className="border border-primary bg-dark  rounded-lg px-4 py-2 outline-none mb-8" rows={5} />
      {errors.message && <p className="text-red-500 text-[12px]">Dette felt er obligatorisk</p>}

      <button type="submit" className=" mx-auto text-3xl py-4 px-20 bg-secondary rounded-tl-[50px] rounded-br-[50px]">
        Indsend
      </button>
    </form>
   
    </>
   
  );
};

export default ContactForm;

'use client'
import { useState } from "react";
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
       e.preventDefault();
       console.log(name, email, message);
       if(!name || !email || !message){
          toast.error('All Feild Required')
          return;
       }
       try {
        const res = await fetch("/api/contact",{
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        const { msg, success } = await res.json();
        if(success){
          setName(''),
          setEmail('')
          setMessage('')
          toast.success(msg[0])
        }else{
          if(msg){
            msg?.map((e)=>  toast.error(e))
          }
        }
       } catch (error) {
         console.log(error);
       }
  }
  return (
    <div>
    <form className="pb-3 mt-4 border-t flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label className='py-3 text-xl' htmlFor="name">Name</label>
        <input  type="text" id="name" className='border rounded-md border-slate-500 px-2 py-2 w-full ' placeholder="enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>

      <div className='flex flex-col'>
        <label className='pb-2 text-xl' htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='border rounded-md border-slate-500 px-2 py-2 w-full ' id="email" placeholder="enter your email" />
      </div>

      <div  className='flex flex-col'>
        <label className='pb-2 text-xl'  htmlFor="message">Your Message</label>
        <textarea className='border rounded-md border-slate-500 px-2 py-2 w-full h-44' id="message" placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </div>

      <button className="bg-green-700 p-3 text-white font-bold" type="submit">
        Send
      </button>
    </form>
  </div>
  )
}

export default ContactForm
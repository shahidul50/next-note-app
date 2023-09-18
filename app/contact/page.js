import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='w-96 md:w-2/4 lg:w-2/4  mx-auto mt-10'>
      <h1 className="text-3xl font-bold text-center underline">Contact Us</h1>
      <p className='text-center'>Please fill in the form below</p>
       <ContactForm/>
    </div>
  )
}

export default Contact
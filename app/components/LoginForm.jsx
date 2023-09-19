"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-center text-3xl font-bold mb-4 underline'> Login</h1>
      {/* <form>
            <div className='flex flex-col'>
              <label htmlFor='email' className='py-3 text-xl'>Email</label>
              <input type="text" id='email' className='border rounded-md border-slate-500 px-2 py-2 w-full' placeholder="enter your email"/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='password' className='py-3 text-xl'>Password</label>
              <input type="password" id='password' className='border rounded-md border-slate-500 px-2 py-2 w-full' placeholder="enter your password"/>
            </div>

            <div className='mt-4 w-full'>
                <button type="submit" className="bg-green-400 p-3 text-white font-bold w-full hover:bg-green-600">
                    Login
                </button>
            </div>
      </form> */}
        <div className='mt-2 flex justify-center'>
          <button onClick={() => signIn('google')} className="bg-blue-300 px-8 py-3 text-white flex justify-center items-center hover:bg-blue-500">
            <Image src="/google-logo.png" width={30} height={30} className='pr-2' alt='google'/>
            Login with google
            </button>
        </div>

    </div>
  )
}

export default LoginForm
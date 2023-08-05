'use client'


import ForgotPassword from '@/components/ForgotPassword'
import LineGrid from '@/components/LineGrid'
import SignInWithCredentials from '@/components/signInWithCredentials'
import {signIn} from 'next-auth/react'
import { useState } from 'react'

function SignIn() {
  const [showItem, setShowItem] = useState(true);

  const itemHandler = ()=> setShowItem((pre)=> !pre);

  return (
    <div className='flex flex-col w-full h-full items-center justify-center '>
        <div className='w-[20%]'>
             <SignInWithCredentials/>
        </div>
        <button onClick={()=> signIn('google',{callbackUrl:'/'})} className='bg-amber-400 w-fit rounded-lg text-[12px] px-1 text-white py-1'>
          Google Login
        </button>
        <div className='flex flex-col w-full items-center my-3'>
          <h1 onClick={itemHandler} className='text-[12px] text-slate-500 font-mono cursor-pointer'>Forgot Password</h1>
          <div className={showItem ? 'w-full opacity-0' : 'w-full opacity-100 transition duration-1000'}>
            <ForgotPassword/>
          </div>
        </div>
    </div>
  )
}

export default SignIn
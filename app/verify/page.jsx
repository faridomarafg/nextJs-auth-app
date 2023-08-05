import { verifyWithCredentials } from '@/actions/authActions'
import React from 'react'

async function VerifyPage({searchParams: {token}}) {

    const res = await verifyWithCredentials(token);

  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='flex w-[40%] h-[40%] rounded-lg shadow-lg items-center justify-center'>
           <h1 className='text-2xl sm:text-4xl md:text-4xl text-green-600 font-bold font-mono'>{res?.message}</h1>
        </div>
    </div>
  )
}

export default VerifyPage
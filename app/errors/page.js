'use client'

import {useRouter, useSearchParams} from 'next/navigation';

function Errors() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const errMsg = searchParams.get('error');

  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>
        <h1 className='text-3xl font-serif text-slate-500'>
            Errors: <span className='font-mono text-red-600 font-bold'>{errMsg}</span>
        </h1>

        <button className='bg-blue-500 text-white rounded-lg px-9 mt-4'
        onClick={()=> router.back()}
        >
            Try Again
        </button>
    </div>
  )
}

export default Errors
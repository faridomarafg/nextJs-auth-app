'use client'

import {useSession} from 'next-auth/react';

function ProtectedComponent({user}) {
    const {data: session} = useSession();

  return (
    <p className='text-amber-500'>you are logged as  <b className='text-red-400'>{session?.user?.name|| user?.name}</b> </p>
  )
}

export default ProtectedComponent
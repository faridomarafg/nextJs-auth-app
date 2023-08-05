'use server'

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileComponent from '@/components/profile'
import {getServerSession} from 'next-auth/next'

async function ProfileServerPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-xl text-slate-500'>Profile <span className='text-blue-600 font-bold'>Server </span>Side</h1>
      <ProfileComponent user={session?.user}/> 
    </div>
  )
}

export default ProfileServerPage
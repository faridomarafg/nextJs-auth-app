'use client'

import ProfileComponent from '@/components/profile';

function ProfileClientPage() {

  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-xl text-slate-500'>Profile <span className='text-red-400'>client</span>Side</h1>
      <ProfileComponent/> 
    </div>
  )
}

export default ProfileClientPage


// 'use client'

// import ProfileComponent from '@/components/profile'
// import {useSession} from 'next-auth/react'

// function ProfileClientPage() {
// const {data: session, update} = useSession();

//   return (
//     <div className='flex flex-col w-full'>
//       <h1 className='text-xl text-slate-500'>Profile <span className='text-red-400'>client</span>Side</h1>
//       <ProfileComponent user={session?.user} update={update}/> 
//       <ProfileComponent/> 
//     </div>
//   )
// }

// export default ProfileClientPage
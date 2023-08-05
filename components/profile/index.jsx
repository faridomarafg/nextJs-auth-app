'use client'

import ProfileCard from "./profileCard"
import ProfileUpdate from "./ProfileUpdate"
import {useSession} from 'next-auth/react';
import LineGrid from "../LineGrid";
import ChangePassword from "./ChangePassword";

function ProfileComponent({user}) {
  const {data : session} = useSession();
  /*
     first time: session = undifined, user exist run the server-side;
     next time: session exist => run client-side
  */

  return (
    <div>
        <ProfileCard user={session?.user || user}/>

        <LineGrid className='w-full h-[0.1px] bg-black my-3'/>

        <ProfileUpdate/>
        
        {/* check to only credentials user can see the changePassword-functionality */}
        {
          (session?.user?.provider === 'credentials' || user?.provider === 'credentials')
          && 
          (<>
          <LineGrid className='w-full h-[0.1px] bg-black my-3'/>

          <ChangePassword/>
          </>)
        }

    </div>
  )
}

export default ProfileComponent
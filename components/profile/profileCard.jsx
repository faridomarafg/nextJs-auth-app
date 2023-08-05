import Image from 'next/image'
import React from 'react'

function ProfileCard({user}) {
  return (
    <div>
        <h2>Name : {user?.name}</h2>
        {user?.image && <Image src={user.image} alt='image' width={100} height={100}/>}

        <h2>Email : {user?.email}</h2>
        <h2>Role : {user?.role}</h2>
        <h2>Provider : {user?.provider}</h2>
    </div>
  )
}

export default ProfileCard
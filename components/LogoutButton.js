'use client'

import {signOut} from 'next-auth/react'

function LogoutButton() {


  return (
    <div>
        <button className='font-thin border rounded-lg px-1'
        type="button" onClick={()=> signOut({callbackUrl:'/signin'})}
        >
        Logout
        </button>
    </div>
  )
}

export default LogoutButton
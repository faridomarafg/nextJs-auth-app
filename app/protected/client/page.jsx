'use client'

import ProtectedComponent from '@/components/Protected';

function ProtectedClientPage() {

  return (
    <div>
        <h1>
            this is a 
            <li className=' text-red-400 font-bold'>Clinet-side</li> protected page
        </h1>

        <ProtectedComponent/>
    </div>
  )
}

export default ProtectedClientPage
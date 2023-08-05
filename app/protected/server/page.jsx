

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProtectedComponent from '@/components/Protected';
import {getServerSession} from 'next-auth/next';
import {redirect} from 'next/navigation';


async function ProtectedServertPage() {
  // in the server sever side the function should be asyn-function
  const session = await getServerSession(authOptions);

  return (
    <div>
        <h1>
            this is a 
            <li className=' text-red-400 font-bold'>Server-side</li> protected page
        </h1>

        <ProtectedComponent user={session?.user}/>
    </div>
  )
}

export default ProtectedServertPage
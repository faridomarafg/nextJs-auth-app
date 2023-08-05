
import Link from 'next/link'
import {getServerSession} from 'next-auth/next';
import LogoutButton from './LogoutButton';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


async function Header() {
  const session = await getServerSession(authOptions);
  


  return (
    <section className='flex w-full h-[70px] justify-between items-center px-2 shadow-sm'>
        <Link href='/' className='flex font-thin'>
            <h1>Nextjs-</h1>
            <span className='text-pink-600'>Auth</span>
            <h1>-Application</h1>
        </Link>
        {/* links */}
        <div className='flex gap-2'>
          {session ? 
          (<>
            <Link className='font-thin border rounded-lg px-1' href='/'>Home</Link>
            <Link className='font-thin border rounded-lg px-1' href='/protected/client'>Client protected</Link>
            <Link className='font-thin border rounded-lg px-1' href='/protected/server'>Server protected</Link>
            <Link className='font-thin border rounded-lg px-1' href='/profile/client'>Profile client</Link>
            <Link className='font-thin border rounded-lg px-1' href='/profile/server'>Profile server</Link>
            <Link className='font-thin border rounded-lg px-1' href='/dashboard'>Admin Dashboard</Link>
            <LogoutButton/>
          </>) 
          : 
          (<>
            <Link className='font-thin border rounded-lg px-1' href='/'>Home</Link>
            <Link className='font-thin border rounded-lg px-1' href='/protected/client'>Client protected</Link>
            <Link className='font-thin border rounded-lg px-1' href='/protected/server'>Server protected</Link>
            <Link className='font-thin border rounded-lg px-1' href='/profile/client'>Profile client</Link>
            <Link className='font-thin border rounded-lg px-1' href='/profile/server'>Profile server</Link>
            <Link className='font-thin border rounded-lg px-1' href='/dashboard'>Admin Dashboard</Link>
            <Link className='font-thin border rounded-lg px-1' href='/signin'>SignIn</Link>
            <Link className='font-thin border rounded-lg px-1' href='/signup'>SignUp</Link>
          </>)}
        </div>
    </section>
  )
}

export default Header
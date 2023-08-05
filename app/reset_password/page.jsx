'use client'

import { resetPasswordWithCredentials } from '@/actions/authActions';
import {useRouter} from 'next/navigation'


function ResetPassword({searchParams :{token}}) {
  const router = useRouter();

  const handleResetPassword = async (formData)=>{
    const password = formData.get('password');
    const res = await resetPasswordWithCredentials({token, password});

    if(res?.message) alert(res?.message);
    router.push('/signin') 
  };

  return (
    <div className='flex flex-col'>
      <h1>Reset Password</h1>
      <form action={handleResetPassword}
      className='flex flex-col'
      >
        <input type="password" name='password' placeholder='Password' required />
        <button className='bg-blue-500 text-white rounded-lg px-5'>Reset Password</button>
      </form>
    </div>
  ) 
}

export default ResetPassword
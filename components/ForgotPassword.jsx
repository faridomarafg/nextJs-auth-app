import { forgotPasswordWithCredentials } from '@/actions/authActions';
import React from 'react'

function ForgotPassword() {

    const handleForgotPassword = async(formData)=>{
        const email = formData.get('email');
 
        const res = await forgotPasswordWithCredentials({email});
        if(res?.message) alert(res?.message)
     };

  return (
    <div className='flex flex-col w-full h-fit items-center'>
       <div className='flex w-[20%] flex-col items-center justify-center'>
        <form action={handleForgotPassword} className='flex flex-col items-center w-[80%]'>
            <input className='auth_input' type="email" name='email' placeholder='Email' required />
            <button className='auth_button'>Forgot password</button>
        </form>
       </div>
    </div>
  )
}

export default ForgotPassword
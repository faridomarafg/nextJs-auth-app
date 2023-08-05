'use client'

import { signUpWithCredentials } from '@/actions/authActions';
import Form from '@/components/Form'
import {signIn} from 'next-auth/react'



function SignInWithCredentials() {


    const credentialSignIn = async (formData)=>{
        const email = formData.get('email');
        const password = formData.get('password');
        
        await signIn('credentials', {email, password, callbackUrl:'/'})
    };

  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>
        <Form action={credentialSignIn} className='flex flex-col items-center  w-[100%] p-5'>
            <input className='auth_input' type="email" name='email' placeholder='Email' required />
            <input className='auth_input' type="password" name='password' placeholder='Password' required />
            <button className='auth_button'>SignIn</button>
        </Form>
    </div>
  )
}

export default SignInWithCredentials
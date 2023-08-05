'use client'

import { signUpWithCredentials } from '@/actions/authActions';
import Form from '@/components/Form'
import React from 'react'

function SignUp() {

    async function signIn(formData){
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        
        const res = await signUpWithCredentials({name, email, password});

        if(res?.message) alert(res?.message)
    };

  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>
        <h1 className='text-xl text-emerald-600 font-serif font-bold mb-5'>SignUp with credentials</h1>
        <Form action={signIn} className='flex flex-col border-4 w-[60%] p-5'>
            <input type="text" name='name' placeholder='Name' required />
            <input type="email" name='email' placeholder='Email' required />
            <input type="password" name='password' placeholder='Password' required />
            <button className='border-2'>SignUp</button>
        </Form>
    </div>
  )
}

export default SignUp
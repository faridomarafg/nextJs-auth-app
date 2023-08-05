import { changePasswordWithCredentials } from '@/actions/authActions';
import React from 'react'

function ChangePassword() {


  const handleChangePassword = async (fromData)=>{
    const old_pass = fromData.get('old_pass');
    const new_pass = fromData.get('new_pass');

    const res = await changePasswordWithCredentials({old_pass, new_pass});
    if(res?.message) alert(res?.message);
  }

  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='text-start w-full text-green-600 text-xl font-bold font-serif'>Change Password</h1>
      <form action={handleChangePassword}
      className='flex flex-col w-[70%] border p-4'
      >
        <input type="password" name='old_pass' placeholder='Old Password' required/>
        <input type="password" name='new_pass' placeholder='New Password' required/>
        <button className='bg-green-600 rounded-lg text-white'>Update</button>
      </form>
    </div>
  )
}

export default ChangePassword
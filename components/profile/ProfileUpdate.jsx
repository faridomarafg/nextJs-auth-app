import  updateUser  from '@/actions/authActions';
import React from 'react'
import Button from '../Button';
import Form from '../Form'

function ProfileUpdate({update}) {

    const handleUpdateProfile = async (formData)=>{
        const name = formData.get('name');
        const image = formData.get('image');

        if(update){
            //when update is run client side, the page will re-render;
            //server side won't re-render
            update({name, image})
        }

        const res = await updateUser({name, image});
        if(res?.message) alert(res?.message)
    };

  return (
    <div className='flex flex-col w-full items-center'>
        <h2 className='w-full text-start font-bold text-2xl text-red-300'>Update Profile</h2>

        <Form action={handleUpdateProfile}
        className='flex flex-col border p-4 w-[70%] bg-white'>
            <input className='border border-slate-500 my-2 rounded-lg px-2 outline-none' type="text" name='name' placeholder='Name' required/>
            <input className='border border-slate-500 my-2 rounded-lg px-2 outline-none' type="text" name='image' placeholder='Image' required/>
            <Button className='bg-blue-500 text-white' value={'Updatge Profile'}/>
        </Form>
    </div>
  )
}

export default ProfileUpdate
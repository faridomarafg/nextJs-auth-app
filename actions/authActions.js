'use server'


import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import User from '../models/userModel.js'
import {getServerSession} from 'next-auth/next'
import {redirect} from 'next/navigation';
import bcrypt from 'bcryptjs';
import { generateToken, verifyToken } from '@/utils/token.js';
import sendEmail from '@/utils/sendEmail.js';

const BASE_URL = process.env.NEXTAUTH_URL;


const updateUser = async({name, image})=>{

    try {
        const session = await getServerSession(authOptions);
        if(!session) throw new Error('Unauthorization');
        
        const user = await User.findByIdAndUpdate(session?.user?._id, {name, image},{
            new: true
        }).select('-password');

        if(!user) throw new Error('Email does not exist!');
        return {message: 'Profile updated successfully!'};

    } catch (error) {
        redirect(`/errors?error=${error.message}`)
    }

};

export default updateUser;


export async function signUpWithCredentials(data){

    try {
        const user = await User.findOne({email: data.email});
        if(user) throw new Error('Email is already exist!');

        //hashing password
        if(data.password){
            data.password = await bcrypt.hash(data.password, 10);
        }

        const token = generateToken({user: data});

        await sendEmail({
            to: data.email,
            url: `${BASE_URL}/verify?token=${token}`,
            text: 'VERIFY EMAIL'
        });
        
        return {message: 'SignUp success!, check your email to complete registeration!'};
    } catch (error) {
        redirect(`/errors?error=${error.message}`)
    }

};


export async function verifyWithCredentials(token){
    try {
        const { user } = verifyToken(token);

        const userExist = await User.findOne({email: user.email});

        if(userExist) return {message:'verify success!'};

        const newUser = new User(user);

        await newUser.save();

        return {message: 'verify success!'};
    } catch (error) {
        redirect(`/errors?error=${error.message}`)
    }

};


export async function changePasswordWithCredentials({old_pass, new_pass}){

  try {
    const session = await getServerSession(authOptions);
    
    if(!session) throw new Error('Unauthorized!');

    //check to only credentials-account to change its passwrod;
    if(session?.user?.provider !== 'credentials'){
        throw new Error(`This account was created your : ${session?.user?.provider}`);
    };

    const user = await User.findById(session?.user?._id);
    if(!user) throw new Error('User does not exist!');
    
    //check for valid_old password
    const valid_old_password = await bcrypt.compare(old_pass, user.password);
    if(!valid_old_password) throw new Error('Wrong old-password, lease enter the correct password!');

    //create new password
    const newPasword = await bcrypt.hash(new_pass, 10);

    await User.findByIdAndUpdate(user._id, {password: newPasword}, {new: true})

    return {message: 'Password changed succssfully!'};
  } catch (error) {
    redirect(`/errors?error=${error.message}`)
  }
};



//FORGOT PASSWORD

export async function forgotPasswordWithCredentials({email}){
  try {
    const user = await User.findOne({email});
    if(!user) throw new Error('Email does not exist!');

    //check to use only credentials users can reset thier password;
    if(user?.provider !== 'credentials'){
        throw new Error(`This account is signed in with ${user?.provider}. You cant use this function! `)
    }

    //generate token 
    const token = generateToken({userId: user._id});

    //send token through the email to reset the password
    await sendEmail({
        to: email,
        url: `${BASE_URL}/reset_password?token=${token}`,
        text: 'RESET PASSWORD!'
    })

    return {message :'Success!, check your email to reset Password!'};
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  } 
};


//RESET PASSWORD

export async function resetPasswordWithCredentials({token,password}){
    try {
        //get userId from verified-token to reset its password by using the ID;
        const {userId} = verifyToken(token);

        //now lets hash the password
        const newPasword = await bcrypt.hash(password, 10);

        //finally let's update the user-password
        await User.findByIdAndUpdate(userId, {password: newPasword})

        return {message :'Success!, your password has been reset!'};
    } catch (error) {
        redirect(`/errors?error=${error.message}`);
    }
}
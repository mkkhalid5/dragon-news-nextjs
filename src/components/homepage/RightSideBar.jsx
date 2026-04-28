"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    const handleGoogleSignin = async () =>{
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log("google", data);
    };
    const handleGitHubSignin = async () =>{
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log("github", data);
    };
    

    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}><FaGoogle /> Login with google</button>
                <button className='btn border-black' onClick={handleGitHubSignin}><FaGithub /> Login with github</button>
            </div>
        </div>
    );
};

export default RightSideBar;
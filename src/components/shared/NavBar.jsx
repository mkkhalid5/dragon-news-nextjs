"use client"
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log("Session", user);
    return (
        <div className='container mx-auto px-3 flex justify-between gap-2 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-4'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about-us"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            {isPending ? (
                <span className='loading loading-spinner loading-lg'></span>
            ) :
                user ? (<div className='flex items-center gap-2'>
                    <h2>Hello, {user.name}</h2>
                    <Image src={user.image || userAvatar} alt='User avatar' width={60} height={60}className='rounded-full'/>
                    <button className='btn bg-purple-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>


                </div> ):
                    (<button className='btn bg-purple-500 text-white'>
                        <Link href={"/login"}>Login</Link>
                    </button>)
            }
        </div>
    );
};

export default NavBar;
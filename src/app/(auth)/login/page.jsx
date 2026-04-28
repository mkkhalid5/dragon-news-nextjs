"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';


const LoginPage = () => {

    const {register, handleSubmit} = useForm();

    const handleLoginFunc = (data) => {
        console.log("login data: ", data);
        
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-50 mt-4'>
            <div className='p-18 rounded-xl bg-white shadow'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>
                <hr className='text-slate-300 mb-6' />

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input  type="email" className="input" placeholder="Enter your email"
                        {...register("email", {required: "Email field is required"})} />
                         {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input  type="password" className="input" placeholder="Enter your password"
                        {...register("password", { required: "Password field is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn w-full bg-slate-800 text-white'>Login</button>
                </form>
                <p className='mt-4'>Don`t have an account? <Link href={"/register"} className='text-blue-500'>Register</Link></p>
            </div>

        </div>
    );
};

export default LoginPage;
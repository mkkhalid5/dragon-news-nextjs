"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';


const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();

    const handleRegisterFunc = async (data) => {
        const { email, name, password, photo } = data;
        
        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log("DB", res);
        if(error){
            alert(error.message)
        }
        if(res){
            alert("Sign up successfull");
        }
    }


    return (
        <div className='container p-8 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-50 mt-4'>
            <div className='p-16 rounded-xl bg-white shadow'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>
                <hr className='text-slate-300 mb-6' />

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input type="text" className="input" placeholder="Enter your name"
                            {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your photo url"
                            {...register("photo", { required: "Photo url is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Enter your email address"
                            {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Enter your password"
                            {...register("password", { required: "Password field is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <p className='text-slate-500'><input type="checkbox" className="checkbox" /> Accept <Link href={"/term-conditions"}><button className='font-bold text-black'>Term & Conditions</button></Link></p>
                    <button className='btn w-full bg-slate-800 text-white'>Register</button>
                </form>
                <p className='mt-4'>Don`t have an account? <Link href={"/register"} className='text-blue-500'>Register</Link></p>
            </div>

        </div>
    );
};

export default RegisterPage;
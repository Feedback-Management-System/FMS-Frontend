import React from 'react';
import LoginSvg1 from 'assets/images/msi_logo.png';

const LoginPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className='w-full justify-center items-center hidden sm:block bg-gradient-to-r from-teal-800 to-gray-800'>
                <img className='mx-auto shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' src={LoginSvg1} alt="LoginSvg1" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='w-full mx-auto p-8 px-8 rounded-lg max-w-[400px] bg-gray-900'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor='username'>Username</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" id='username'/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Username</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'> 
                      <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type='submit'>Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

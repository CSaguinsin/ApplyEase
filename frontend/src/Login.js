import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp.js';

export default function Login() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-500">
            <div>
                <div className="flex justify-center">
                    <img src='./ApplyEase-White@2x.png' className='h-16 mb-6' />
                </div>
                <div className="max-w-sm flex justify-center items-center">
                    <form className="bg-white p-6 rounded-2xl">
                        <label className="text-sm">
                            Email:
                            <input
                                type="text"
                                placeholder="Your email"
                                className="py-2 px-3 w-full border rounded text-green-900 focus:outline-none mt-2 mb-4"
                            />
                        </label>
                        <label className="text-sm">
                            Password:
                            <input
                                type="password"
                                placeholder="**********"
                                className="py-2 px-3 w-full border rounded text-green-900 focus:outline-none mt-2 mb-4"
                            />
                        </label>
                        <label className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                            />
                            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-2 text-xs">
                                Remember me
                            </span>
                        </label>
                        <button className="w-full bg-blue-800 text-white p-2 text-xs rounded-md shadow focus:outline-none hover:bg-blue-700 hover:text-white">
                            SIGN IN
                        </button>
                        <div className="mt-5 text-sm flex justify-center">
                            Don't have an account?
                        </div>
                        <div className="text-sm flex justify-center text-blue-900 font-black">
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </form>
                </div >
            </div>
        </div>

    )
}
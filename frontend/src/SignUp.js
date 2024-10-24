import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="bg-blue-500 flex h-screen w-full justify-center items-center">
            <div>
                <div className="w-full flex justify-center items-align text-2xl font-bold text-white mb-2 block">
                    Welcome!
                </div>
                <div className="w-full flex justify-center items-align text-sm font-thin text-white mb-6">
                    Unlock your job search potential-sign up for free today
                </div>
                <div className="max-w-sm flex justify-center items-center">
                    <form className="bg-white p-6 rounded-2xl">
                        <label className="text-sm">
                            Name:
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="py-2 px-3 w-full border rounded text-green-900 focus:outline-none mt-2 mb-4"
                            />
                        </label>
                        <label className="text-sm">
                            Email:
                            <input
                                type="Your email address"
                                placeholder="example@example.com"
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
                            SIGN UP
                        </button>
                        <div className="mt-5 text-sm flex justify-center">
                            Already have an account?
                        </div>
                        <div className="text-sm flex justify-center text-blue-900 font-black">
                            <Link to='/login'>Sign In</Link>
                        </div>
                    </form>
                </div >
            </div>
        </div >
    )
}
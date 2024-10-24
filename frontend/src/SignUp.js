import React from 'react';
import { CiUser, CiMail } from "react-icons/ci";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="bg-blue-700 flex h-screen w-full justify-center items-center">

            <div>
                <div className="w-full flex justify-center items-align text-2xl font-bold text-white mb-2 block">
                    Welcome!
                </div>
                <div className="w-full flex justify-center items-align text-sm font-thin text-white mb-6">
                    Unlock your job search potential-sign up for free today
                </div>
                <div className="w-full flex justify-center items-center">
                    <form className="bg-white p-6 rounded-md" style={{ width: 500 }}>
                        <label className="text-sm">
                            Name:
                            <div className="mt-2 mb-6 w-full flex items-center border-0 border-b-2 inline-block px-3">
                                <CiUser className="text-xl" />
                                <input
                                    type="text"
                                    placeholder="Surname, Firstname, Middlename"
                                    className="py-2 px-3 w-full text-green-900 focus:outline-none"
                                />
                            </div>
                        </label>
                        <label className="text-sm">
                            Email:
                            <div className="mt-2 mb-6 w-full flex items-center border-0 border-b-2 inline-block px-3">
                                <CiMail className="text-xl text-gray-900" />
                                <input
                                    type="email"
                                    placeholder="example@example.com"
                                    className="py-2 px-3 w-full text-green-900 focus:outline-none"
                                />
                            </div>

                        </label>
                        <label className="text-sm">
                            Password:
                            <div className="mt-2 mb-6 w-full flex items-center border-0 border-b-2 inline-block px-3">
                                <RiLockPasswordLine className="text-xl text-gray-900" />

                                <input
                                    type="password"
                                    placeholder="**********"
                                    className="py-2 px-3 w-full text-green-900 focus:outline-none"
                                />
                            </div>
                        </label>
                        <label className="text-sm">
                            Confirm Password:
                            <div className="mt-2 mb-6 w-full flex items-center border-0 border-b-2 inline-block px-3">
                                <RiLockPasswordFill className="text-xl text-gray-900" />
                                <input
                                    type="password"
                                    placeholder="**********"
                                    className="py-2 px-3 w-full text-green-900 focus:outline-none"
                                />
                            </div>
                        </label>
                        <button className="w-full bg-green-300 p-2 rounded-md shadow focus:outline-none hover:bg-green-700 hover:text-white">
                            Sign Up
                        </button>
                        <div className="mt-5 text-sm italic hover:underline">
                            <Link to='/login'>Already a member?</Link>
                        </div>
                    </form>
                </div >
            </div>
        </div >
    )
}
import React from 'react';
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="w-full h-screen flex-block justify-center items-center bg-green-200">
            <div className="flex justify-center">
                <img src='./ApplyEase@2x.png' className='h-28' />
            </div>
            <form className="bg-white rounded-md max-w-lg p-6" style={{ width: 800 }}>
                <label>
                    Email:
                    <div className="mt-2 mb-6 w-full flex items-center border-0 border-b-2 px-3">
                        <CiMail className="text-xl text-gray-900" />
                        <input
                            type="email"
                            className="py-2 px-3 w-full text-green-900 focus:outline-none"
                        />
                    </div>
                </label>
                <label>
                    Password:
                    <div className="mt-2 mb-6 w-full flex items-center">
                        <RiLockPasswordLine className="text-xl text-gray-900" />
                        <input
                            type="password"
                        />
                    </div>
                </label>
                <button>
                    Login
                </button>
            </form>
        </div>

    )
}
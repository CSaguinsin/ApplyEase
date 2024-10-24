import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
      });

      console.log(response.data);
      if (response.data.success) {
        alert('Signup successful!');
        navigate('/dashboard');  // Redirect to Dashboard
      } else {
        alert('Signup failed.');
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="absolute z-0 top-0 w-auto mt-2 mx-2">
        <img src='./skyscrapers.png' className="w-screen h-96 object-cover rounded-xl brightness-50" />
        <div className="absolute inset-0 rounded-xl bg-blue-900 z-10 top-0 opacity-50"></div>
      </div>
      <div className="z-50">
        <div className="w-full flex justify-center items-align text-2xl font-bold text-white mb-2">
          Welcome!
        </div>
        <div className="w-full flex justify-center items-align text-sm font-thin text-white mb-6">
          Unlock your job search potential - sign up for free today
        </div>
        <div className="max-w-sm flex justify-center items-center">
          <form className="bg-white p-6 rounded-2xl" onSubmit={handleSignUp}>
            <label className="text-sm">
              Name:
              <input
                type="text"
                placeholder="Your full name"
                className="py-2 px-3 w-full border rounded text-green-900 focus:outline-none mt-2 mb-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="text-sm">
              Email:
              <input
                type="text"
                placeholder="example@example.com"
                className="py-2 px-3 w-full border rounded text-green-900 focus:outline-none mt-2 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="text-sm">
              Password:
              <input
                type="password"
                placeholder="**********"
                className="py-2 px-3 w-full border rounded text-green-900 focus:outline-none mt-2 mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default SignUp;

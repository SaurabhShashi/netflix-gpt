import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm=() =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
      <div className="relative min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg')" }}>

      <Header />
      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form className="w-full max-w-md p-8 py-10 space-y-8 bg-black rounded-lg bg-opacity-80">
            <h1 className="font-bold text-white text-3xl pb-9 pt-0 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
              <input type='text' placeholder='Full Name' className="bg-gray-700 p-3 rounded-lg w-full "/>
            )}
            <input type='text' placeholder='Email Address' className="w-full p-3 text-black rounded bg-gray-700"/>
            <input type='password' placeholder='Password' className="w-full p-3 text-black rounded bg-gray-700"/>
            <button className="w-full p-3 text-white bg-red-500 rounded-lg hover:bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-white mx-1.5 text-xl cursor-pointer" onClick={toggleSignInForm}> {isSignInForm?  "New to Netflix? Sign Up Now" : "Already a User? Sign In Now.. "}</p>
        </form>
      </div>
    </div>
  );
}


export default Login

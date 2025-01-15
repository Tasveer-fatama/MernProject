import React, { useState } from "react";
import { X } from "lucide-react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";

const Login = ({ closeLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth,setAuth] = useAuth()
  const navigate = useNavigate()
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend API call for login
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password })
      if (res.data.success) {
        // Show success message
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate('/'); 
        } else {
        // Show error message
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col gap-5 text-white">
          <button
            onClick={closeLogin}
            className="absolute top-3 right-3 place-self-end"
          >
            <X size={30} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0"
          >
            <div className="p-6 space-y-4 sm:p-8">
              <div className="mb-11 text-center">
                <h1 className="text-gray-900 font-manrope text-3xl font-serif leading-10 mb-2">
                  Welcome Back
                </h1>
                <p className="text-black text-base font-medium leading-6">
                  Let’s get started with your 30 days free trial
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your Email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-3 text-sm text-black"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-black hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    className="font-serif text-primary-600 hover:underline"
                  >
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

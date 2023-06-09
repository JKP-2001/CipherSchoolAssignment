import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../BasicLayouts/SideBar'

const Signup = () => {
    return (
        <div className="flex bg-white">
            <SideBar />
            <section class="w-full">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                    <div class="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 border-2 shadow-lg border-cyan-300">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Create New Account.
                            </h1>
                            <form class="space-y-4 md:space-y-6 ">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-black ">Name</label>
                                    <input type="text" name="first_name" id="first_name" class=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                

                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-black ">Your email</label>
                                    <input type="email" name="email" id="email" class=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button type="submit" class="w-full text-black bg-primary-600 bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                                <p class="text-sm font-normal text-black ">
                                    Already have an account ? <Link to="/login" class="font-medium text-black hover:underline dark">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {LogoutBtn } from '../index'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavigationBar() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()


    const navigation = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <Disclosure as="nav" className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
            {({ open }) => (

                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-between  sm:items-stretch ">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-10 w-15"
                                    src="https://images.pexels.com/photos/19652440/pexels-photo-19652440/free-photo-of-logo.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Your Company"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        item.active ? (
                                            <li key={item.name} className='list-none '>
                                                <button
                                                    onClick={() => navigate(item.slug)}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >{item.name}</button>
                                            </li>
                                        ) : null
                                    ))}
                                    {authStatus && (
                                        <li className='list-none'>
                                            <LogoutBtn />
                                        </li>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </Disclosure>
    )
}

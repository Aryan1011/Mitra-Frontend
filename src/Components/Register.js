import React from 'react'

import { useState } from 'react'
import { Tab } from '@headlessui/react'

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

let cats = [
    {
        name: "Login",
        component: { LoginForm }

    },
    {
        name: "Register",
        component: { SignupForm }

    }
];

function Register() {

    let [categories] = useState({
        Recent: [
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            }
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },

        ],

    })
    return (
        <>
            <div className='flex justify-center w-full p-8 bg-white'>
                {console.log(cats)}
                <div className='w-10/12 p-8 bg-gray-200 ' style={{ height: "80vh" }}>
                    <div className='flex flex-col items-center w-full p-6 bg-white'>
                        <h1 className='mb-4 text-5xl'>MITRA</h1>
                        <h1 className='text-green-400 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium doloremque enim, impedit exercitationem optio eveniet, ut incidunt voluptatibus cum eius magnam tempore sed mollitia quos! Nulla mollitia libero debitis corrupti hic ipsam?
                        </h1>
                        <div className="w-full px-2 py-16 sm:px-0">
                           
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Register








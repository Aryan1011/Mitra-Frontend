
import React from 'react'
import loginimage from '../assets/loginimage.png'



function LoginForm() {
  return (
    
    <div className="p-4 bg-gray-200 ">
        <div className='content-center sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200'>
          <label className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Email
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="email" required />
         </div>
          

        </div>

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Password
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="password" required />
         </div>
          

        </div>


    </div>
  )
}

export default LoginForm
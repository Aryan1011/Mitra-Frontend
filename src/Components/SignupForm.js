import React from 'react'

function SignupForm() {
  return (
    <>
      <div className="p-4 bg-gray-200 space-y-4">
        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Full Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="name" required />
          </div>


        </div>


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
            Contact Number
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="number" required />
         </div>
          

        </div>

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label className='block text-sm font-medium text-gray-700 sm:mt-px '>
            address
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="address" required />
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

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label className='block text-sm font-medium text-gray-700 sm:mt-px '>
           Confirm Password
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="cpassword" required />
         </div>
          

        </div>

      </div>
    </>
  )
}

export default SignupForm
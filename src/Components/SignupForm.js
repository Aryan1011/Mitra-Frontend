
import React, { useState } from 'react';

function SignupForm() {

  const [member, setMember] = useState({
    name:"",
    email: "",
    phone:"",
    address:"",
    password: "",
    cpassword: ""

  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setMember((preValue) => {
      return {
        ...preValue,
        [name]: value 
      }
    });
  };

  return (
    <>
      <div className="p-4 bg-gray-200 space-y-4">
        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Full Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="name"  name='name' value={member.name} onChange={inputEvent} placeholder='ABC DEF' required />
          </div>


        </div>


        <div className='content-center sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Email
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="email"  name='email' value={member.email} onChange={inputEvent} placeholder='ABC@gmail.com' required />
          </div>


        </div>

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label htmlFor='number' className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Contact Number
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="number"  name='number' value={member.number} onChange={inputEvent} placeholder='ABC DEF' required />
         </div>
          

        </div>

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label htmlFor='address' className='block text-sm font-medium text-gray-700 sm:mt-px '>
            address
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="address"  name='address' value={member.address} onChange={inputEvent} placeholder='ABC DEF' required />
         </div>
          

        </div>

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700 sm:mt-px '>
            Password
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="password"  name='password' value={member.password} onChange={inputEvent} placeholder='ABC DEF' required />
         </div>
          

        </div>

        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
          <label htmlFor='cpassword' className='block text-sm font-medium text-gray-700 sm:mt-px '>
           Confirm Password
          </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <input type="cpassword"  name='cpassword' value={member.cpassword} onChange={inputEvent} placeholder='ABC DEF' required />
         </div>
          

        </div>

      </div>
    </>
  )
}

export default SignupForm
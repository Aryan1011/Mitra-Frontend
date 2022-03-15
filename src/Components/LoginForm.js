
import React from 'react'
import loginimage from '../assets/loginimage.png'



function LoginForm() {

  const [member, setMember] = useState({
    email: "",
    password: ""
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

    <div className="p-4 space-y-4 bg-gray-200 rounded-md ">
      <div className='content-center sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200'>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700 sm:mt-px '>
          Email
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <input type="email" name='email' value={member.email} onChange={inputEvent} placeholder='abcd@gmail.com' required
            className='block w-full max-w-lg leading-6 rounded-md shadow-sm focus:border-4 focus:ring-indigo-500 focus:border-blue-500 sm:max-w-xs '
          />
        </div>

      </div>

      <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 '>
        <label htmlFor='password' name='password' value={member.password} onChange={inputEvent} placeholder=' ' className='block text-sm font-medium text-gray-700 sm:mt-px '>
          Password
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <input type="password" required
            className='block w-full max-w-lg leading-6 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-blue-500 sm:max-w-xs '
          />
        </div>


      </div>


    </div>
  )
}

export default LoginForm
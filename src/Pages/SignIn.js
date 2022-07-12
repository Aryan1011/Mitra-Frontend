import signImg from '../assets/images/loginImg.jpg'
import React, { useState, useEffect } from "react";
function SignIn() {
  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    password:"",
    cpassword:""
  })
let name,value;
  const handleInputs= (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value}); 
  }

const PostData = async(e)=>{
  e.preventDefault();
  const{ name, email, phone, address, password, cpassword } = user;
  // console.log(user);
  const res = await fetch("http://localhost:4000/register",{  
  method:"POST",
    headers:{
      "content-Type" : "application/json"
    },
    body: JSON.stringify({
      name, email, phone, address, password, cpassword
    })
  });

  const data = await res.json();
  if(data.status === 422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
  }
  else{
    window.alert("Registration Successfull");
    console.log("Registration SuccessFull");
  }
}

  return (
    <>
     <div className='signin'>
          <div className='signInForm'>
              <form method='POST' className="form" >
                <div>
                  <div className='touchContentOuter'>
                    <p className='touchContent'>Register</p>
                  </div>
                </div>

                <label htmlFor='name'>Name</label>
                <input
                  placeholder="Name"
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='off'
                  value={user.name}
                  onChange={handleInputs}
                />
                <label htmlFor='email'>Email</label>
                <input
                  placeholder="Email"
                  type='text'
                  autoComplete='off'
                  name='email'
                  id='email'
                  value={user.email}
                  onChange={handleInputs}
        
                />
                <label htmlFor='phone'>Phone</label>
                <input
                 placeholder="phone"
                  autoComplete='off'
                  type='number'
                  name='phone'
                  id='phone'
                  value={user.phone}
                  onChange={handleInputs}/>
                <label htmlFor='address'>Address</label>
                <input
                  placeholder="Address"
                  type='text'
                  autoComplete='off'
                  name='address'
                  id='address'
                  value={user.address}
                  onChange={handleInputs} />
                <label htmlFor='password'>Password</label>
                <input
                  placeholder="Password"
                  type='password'
                  autoComplete='off'
                  name='password'
                  id='password'
                  value={user.password}
                  onChange={handleInputs}/>
                <label htmlFor='cpassword'>Confirm Password</label>
                <input
                 placeholder="Confirm Password"
                  type='password'
                  name='cpassword'
                  autoComplete='off'
                  id='cpassword'
                  value={user.cpassword}
                  onChange={handleInputs} />

                <button
                  type="submit"
                  onClick={PostData}
                >
                  Submit
                </button>
              </form>
            
          </div>
          <div className='signInImage'>
            <img src={signImg} alt="" />
          </div>
      </div>
    </>
  )
}

export default SignIn
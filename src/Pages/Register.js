import loginImg from '../assets/images/loginImg.jpg'
import React, { useState, useEffect } from "react";

function Register() {
  const [email,SetEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch("http://localhost:4000/signin",{  
      method:"POST",
        headers:{
          "content-Type" : "application/json"
        },
        body: JSON.stringify({
          email,password
        })
      });
    const data = res.json();
    if(res.status ===400 || !data){
      window.alert("Invalid Credentials");
    }
    else{
      window.alert("Login Successfull")
    }
  }
  return (
    <>
      <div className='signup'>
          <div className='signUpForm'>
            <div>
              <form method='POST' className="form" >
                <div>
                  <div className='touchContentOuter'>
                    <p className='touchContent'>Sign In</p>
                  </div>
                </div>

                <label htmlFor='email'>Email</label>
                <input
                  placeholder="Email"
                  value={email}
                  type='text'
                  name='email'
                  id='email'
                  onChange={(e) => SetEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                 placeholder="Password"
                  type='password'
                  value={password}
                  name='cpassword'
                  id='cpassword'
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                onClick={loginUser}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className='signUpImage'>
            <img src={loginImg} alt="" />
          </div>
      </div>
    </>
  )
}

export default Register
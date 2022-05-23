import loginImg from '../assets/images/loginImg.jpg'
import React, { useState, useEffect } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setLoader(true);

    // db.collection("contacts")
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //   .then(() => {
    //     setLoader(false);
    //     alert("Your message has been submitted👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    // setName("");
    // setEmail("");
    // setMessage("");
  };
  return (
    <>
      <div className='signup'>
          <div className='signUpForm'>
            <div>
              <form className="form" onSubmit={handleSubmit}>
                <div>
                  <div className='touchContentOuter'>
                    <p className='touchContent'>Sign In</p>
                  </div>
                </div>

                <label>Username</label>
                <input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="submit"
                  style={{ background: loader ? "#ccc" : " #40506A" }}
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
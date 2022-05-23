import signImg from '../assets/images/loginImg.jpg'
import React, { useState, useEffect } from "react";
function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

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
     <div className='signin'>
          <div className='signInForm'>
              <form className="form" onSubmit={handleSubmit}>
                <div>
                  <div className='touchContentOuter'>
                    <p className='touchContent'>Register</p>
                  </div>
                </div>

                <label>Name</label>
                <input
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                  placeholder="email"
                  value={email}
                  onCh
                  ange={(e) => setEmail(e.target.value)}
                />
                <label>Phone</label>
                <input
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label>Address</label>
                <input
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label>Password</label>
                <input
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password</label>
                <input
                  placeholder="cPassword"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />

                <button
                  type="submit"
                  style={{ background: loader ? "#ccc" : " #40506A" }}
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
import React, { useEffect } from 'react'
function AboutUs() {


  const callAboutPage = async() => {
    try{
      const res = await fetch('http://localhost:4000/about',{
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type":"application/json"
        }
        // credentials:"include"
      });
      const data = await res.json();
      console.log();
      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }
    }
    catch{
      console.log("error");
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);

  return (
      <>
    <div>aboutUs</div>
      </>
  )
}

export default AboutUs
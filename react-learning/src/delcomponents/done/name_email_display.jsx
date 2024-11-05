import React, {useState} from "react";

export default function App(){
  var [full , setFull] = useState({
    fname : "",
    lname : "",
    email : ""
  })
  function handleChange(event){
    const {value , name} = event.target
    setFull(prev =>({...prev,[name]:value}))
    // if(name == 'fname'){
    //   setFull((prev) => { return {
    //     ...prev,
    //     fname : value
    //   }})
    // }
    // if(name == 'lname'){
    //   setFull((prev) => { return {
    //     ...prev,
    //     lname : value
    //   }})
    // }
    // if(name == 'email'){
    //   setFull((prev) => { return {
    //     ...prev,
    //     email : value
    //   }})
    // }
  }

  console.log(full);
  return( 
  <form className="container" action="">
    <h1>{full.fname + " " + full.lname} </h1>
    <p>{full.email} </p>
    <input type="text" placeholder="fname" onChange={handleChange} name="fname" value={full.fname} />
    <input type="text" placeholder="lname" onChange={handleChange} name="lname" value={full.lname} />
    <input type="text" placeholder="email" onChange={handleChange} name="email" value={full.email} />

  </form>
)}

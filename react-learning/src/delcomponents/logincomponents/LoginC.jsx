import React, { useEffect, useState } from 'react';
import "./login.css"

export default function Login(pros){
    console.log(pros);
    const [uname , setUname] = useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")

    useEffect(()=>{
        console.log("username is = ",uname);
    } , [uname])
    useEffect(()=>{
        console.log("pwd is = ",password);
    } , [password])
    useEffect(()=>{
        console.log("eml is = ",email);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log("is email valid? ->",regex.test(email));
    } , [email])
    const handleChange = (e)=>{
        setUname(e.target.value)
    }
    const phandleChange = (e)=>{
        setPassword(e.target.value)
    }
    const ehandleChange = (e)=>{
        setEmail(e.target.value)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("")
    setPassword("")
    setUname("")
    console.log('Form submitted');
    // Handle login logic here
  };
    return <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={uname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={ehandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={phandleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
      <p className="signup-link">
        No account? <a href="#">Sign up</a>
      </p>
    </form>
  </div>
}
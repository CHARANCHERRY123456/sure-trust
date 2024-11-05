import React, { isValidElement, useEffect, useState } from 'react';
import './Login.css'; // Import the CSS file
import { CircleX , CircleCheck } from 'lucide-react';

const Login = () => {
    const [isLogin , setIsLogin] = useState(true);
    const [data , setData] = useState({
        username :"",
        password :""
    });
    const [pwdFeed , setPwdFeed] = useState({
        isOkay : false,
        message : "Ensure to have",
        min8 : "8 Characters",
        haveC :  "Atleast One Capital Letter",
        haveN : "Atlease one number",
    })
    const [isCorrectPwd , setIscorrectPwd] = useState(true);
    useEffect(() => {
        console.log("data = ", data.username , data.password);
    }, [data]);
    

    useEffect(()=>{
        let password = data.password;
        setPwdFeed(pwdFeed=>({
            ...pwdFeed,
            haveC : /(?=.*[A-Z])/.test(password) ? "" : "Atlease one Capital letter",
            haveN : /(?=.*\d)/.test(password) ? "" : "Atlease one Number",
            min8 :password.length >= 8  ? "": "Atleast 8 lenght",
            message : (pwdFeed.haveC=="" && pwdFeed.haveN=="" && pwdFeed.min8=="") ? "Congratulations passowrd is strong no one can crack it" :  "Ensure to have",
            isOkay :  (pwdFeed.haveC=="" && pwdFeed.haveN=="" && pwdFeed.min8=="") ? true : false
        }))
    } , [data.password])
    function handleChange(e) {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Signup</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <div className="username-div" style={{display:"flex"}}>
                        <input style={{border: "none",display: "inline"}}value={data.username}onChange={handleChange}type="text"id="username"name="username"placeholder="Enter your username"required/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="username-div" style={{
                            display:"flex"
                        }}>
                             <input
                                style={{
                                    border: "none",
                                    display: "inline"
                                }}
                                value={data.password}
                                onChange={handleChange}
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Enter your Password"
                                required
                            />                            
                            {!pwdFeed.isOkay && <CircleX color="red" strokeWidth={1.75} />}
                        </div>
                        <span style={{
                            color :pwdFeed.isOkay ? "green":"red"
                        }}>
                        </span>
                    </div>
                    {pwdFeed.message + "-> " +  pwdFeed.min8 + " , " + pwdFeed.haveC + " ," + pwdFeed.haveN}
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="#">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

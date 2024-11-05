import React, { useEffect, useState } from 'react';
import './login.css'; // External CSS file
import LoginC from './LoginC';
import SignupC from './SignupC';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? <SignupC /> : <LoginC name="charan" />}
      <button className='toggle-button' onClick={() => setIsLogin(!isLogin)}> Change</button>
    </div>
  );
};


export default Login;

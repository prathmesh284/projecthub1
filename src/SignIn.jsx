import React, { useEffect, useState } from 'react';
import { LoginForm } from './Auth/LoginForm';
import { RegisterForm } from './Auth/RegisterForm';
import { Button } from 'antd';
import "./SignIn.css"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  // 🌄 Set background image ONLY for this page
  useEffect(() => {
    document.body.classList.add("login-background");

    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  return (
    <div className='auth-page'>
      <div> 
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <Button
          type="link"
          onClick={() => setIsLogin(!isLogin)}
          style={{ display: 'block', textAlign: 'center', margin: '20px auto' }}
        >
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
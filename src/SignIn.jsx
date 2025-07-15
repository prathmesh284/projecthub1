import React, { useState } from 'react';
import { LoginForm } from './Auth/LoginForm';
import { RegisterForm } from './Auth/RegisterForm';
import { Button } from 'antd';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
      

  return (
    <>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <Button
        type="link"
        onClick={() => setIsLogin(!isLogin)}
        style={{ display: 'block', textAlign: 'center', margin: '20px auto' }}
      >
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </Button>
    </>
  );
};

export default AuthPage;
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { Button, Input, Card } from 'antd';
import './LoginForm.css'; // shared styles

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Card
      title={<span className="card-title">Register</span>}
      className="auth-card"
      hoverable
    >
      <div className="custom-input">
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="custom-input">
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <Button type="default" block onClick={register} className="custom-button">
        Register
      </Button>
    </Card>
  );
};

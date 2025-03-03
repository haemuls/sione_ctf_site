'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import "../../../public/styles/login1.css"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with', { username, password });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" alt="user login" />
        </div>
        <div className="login__forms">
          <form onSubmit={handleSubmit} className="login__register" id="login-in">
            <h1 className="login__title">로그인</h1>
            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="login__input"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__box">
              <i className="bx bx-lock login__icon"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="login__input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="login__forgot">비밀번호 찾기</a>
            <button type="submit" className="login__button">로그인</button>
            <Link href="/signup" className="login__signin login__signin--signup">회원가입</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import "../../../public/styles/signup.css"

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 로직 구현
    console.log('Signing up with', { username, password, confirmPassword, nickname, email, affiliation });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__forms">
          <form onSubmit={handleSubmit} className="login__create" id="login-up">
            <h1 className="login__title">회원가입</h1>

            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input
                type="text"
                placeholder="id"
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
                placeholder="비밀번호"
                name="password"
                className="login__input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login__box">
              <i className="bx bx-lock login__icon"></i>
              <input
                type="password"
                placeholder="비밀번호 재입력"
                name="confirm_password"
                className="login__input"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input
                type="text"
                placeholder="닉네임"
                name="nickname"
                className="login__input"
                required
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>

            <div className="login__box">
              <i className="bx bx-at login__icon"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="login__input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login__box">
              <i className="bx bx-briefcase login__icon"></i>
              <input
                type="text"
                placeholder="소속"
                name="affiliation"
                className="login__input"
                required
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
              />
            </div>

            <button type="submit" className="login__button">회원가입</button>

            <div>
              <span className="login__account">계정이 이미 있다면?</span>
              <Link href="/login" className="login__signin">로그인</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
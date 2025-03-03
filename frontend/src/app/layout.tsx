// app/layout.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="CTF, 해킹, 보안, 문제 풀이" />
        <meta name="description" content="CTF 사이트 테스트용 페이지" />
        <meta name="author" content="" />
        <link rel="icon" href="/images/test_sione.jpeg" type="image/gif" />
        <link rel="stylesheet" href="/styles/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/font-awesome.min.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </head>
      <body className="sub_page">
        <div className="hero_area">
          <header className="header_section long_section px-0">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="/">
                <span>CTF 사이트 샘플</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">HOME</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" href="/notice">Notice</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/game">문제</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/ranking">Ranking</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/board">자유 게시판</Link>
                    </li>
                  </ul>
                </div>
                <div className="quote_btn-container">
                <Link href="/login">
                    <span>Login</span>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <main>{children}</main>

        <footer className="footer_section">
          <p>
            &copy; {year ? year : '2025'} CTF 사이트 테스트
          </p>
        </footer>

        <script src="/js/jquery-3.4.1.min.js"></script>
        <script src="/js/bootstrap.js"></script>
        <script src="/js/custom.js"></script>
      </body>
    </html>
  );
}
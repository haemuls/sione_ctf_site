'use client'

import React, { useState } from 'react';
import "../../../public/styles/notice.css"

const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('검색어:', searchTerm);
  };

  return (
    <section className="notice">
      <div className="page-title">
        <div className="container">
          <h3>공지사항</h3>
        </div>
      </div>

      <div id="board-list">
        <div className="container">
          <table className="board-table">
            <thead>
              <tr>
                <th scope="col" className="th-num">번호</th>
                <th scope="col" className="th-title">제목</th>
                <th scope="col" className="th-date">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>
                  <a href="#!">임시 테스트 제목</a>
                </td>
                <td>2025.03.02</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <a href="#!">임시 테스트 제목</a>
                </td>
                <td>2025.03.02</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <a href="#!">공지사항 테스트 제목</a>
                </td>
                <td>2025.03.02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="board-search">
        <div className="container">
          <div className="search-window">
            <form onSubmit={handleSearch}>
              <div className="search-wrap">
                <label htmlFor="search" className="blind">공지사항 내용 검색</label>
                <input
                  id="search"
                  type="search"
                  placeholder="검색어를 입력해주세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="btn btn-dark">검색</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticePage;
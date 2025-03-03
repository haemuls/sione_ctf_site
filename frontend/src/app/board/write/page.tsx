import React, { useState } from 'react';

const BoardWritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 게시글 제출 처리
    console.log('제목:', title, '내용:', content);
  };

  return (
    <div className="board-write">
      <div className="container">
        <h3>게시글 작성</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <button type="submit">게시글 작성</button>
        </form>
      </div>
    </div>
  );
};

export default BoardWritePage;
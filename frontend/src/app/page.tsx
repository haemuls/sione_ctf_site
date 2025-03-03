// app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <section className="about_section layout_padding long_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="/images/test_sione.jpeg" alt="CTF 사이트 테스트용 이미지" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  CTF 사이트 테스트용 이미지입니다.
                </h2>
              </div>
              <p>
                CTF 사이트 테스트용 문구입니다.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
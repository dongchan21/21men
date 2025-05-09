// src/MainPage.jsx
import "./App.css"
import "./MainPage.css";


import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    
  return (
    <div className="page-container">
    
      <div className="card-grid">
        {/* 스마트팜 카드 */}
        <div className="info-card" onClick={() => navigate("/age")}>
        <span className="info-card-title">Smart Farm</span>
        <p className="info-card-desc">수직농장,<br /> 스마트 온실 등<br />미래형 농업 시설의 등장</p>
        <img src="/tree.png" alt="나무" className="info-card-image" />
        <p className="info-card-link">더 알아보려면 클릭하세요 &gt;</p>
        </div>

        {/* 지원 카드 */}
        <div className="info-card" onClick={() => navigate("/age")}>
        <span className="info-card-title">스마트팜 창업 지원 정책</span>
        <p className="info-card-desc">스마트팜 창업 계획이 있으시다면?</p>
        <img src="/money.png" alt="지원 이미지" className="info-card-image" />
        <p className="info-card-link">지원 가능 여부 알아보기 &gt;</p>
        </div>


        {/* AI 카드 */}
        <div className="info-card">
          <span className="info-card-title">스타트업/창업 성공 사례</span>
          <p className="info-card-desc">스마트팜으로<br />청년 창업에 성공한
<br />실제 사례들을<br />확인해보세요!</p>
          <div className="info-card-visual visual-shapes" />
          <p className="info-card-link">더 알아보기 &gt;</p>
        </div>
      </div>
    </div>
  );
}

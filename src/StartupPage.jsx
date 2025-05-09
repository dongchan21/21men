import React from "react";
import "./StartupPage.css";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./components/ui/HeaderNav";

const newsList = [
  {
    id: 1,
    title: "케이에스팜, 사우디 글로벌 포럼서 스마트팜 사례 발표",
    desc: "경북 상주 혁신밸리 기술로 MOU 체결 및 중동 진출",
    date: "2025.04.22",
    image: "/news1.png",
    link: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=202504227334b"
  },
  {
    id: 2,
    title: "‘젊은 피’ 도는 충남 스마트 농업",
    desc: "청년 CEO 205명 탄생…홍성서 합동창업식 개최",
    date: "2025.04.26",
    image: "/news2.png",
    link: "https://www.chungnam.go.kr/governor/bbs/B0000092/view.do?nttId=2149331&menuNo=600009"
  },
  {
    id: 3,
    title: "진안군, 스마트팜 기반 청년 정착 지원",
    desc: "류슬기 대표 사례 중심, 미래농업 육성 집중",
    date: "2025.05.07",
    image: "/news3.png",
    link: "https://www.jjan.kr/article/20250507580175"
  }
];

export default function SmartNewsPage() {
    const navigate = useNavigate();
  return (
    <div className="page-container">
        <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <img src="/logo.png" alt="로고" onClick={() => navigate("/")} style={{ width: '40px', height: '40px', marginRight: '12px' }} />
           <h2 onClick={() => navigate("/")} style={{ margin: 0, fontSize: '20px' }}>Farm Link</h2>
         </div>
        </header>
    <div className="news-page-container">
        
      <div className="news-header">
        <h2>최신 뉴스 둘러보기</h2>
        <hr className="news-divider" />
      </div>

      <div className="news-list">
        {newsList.map((item) => (
          <a href={item.link} key={item.id} className="news-card" target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.title} className="news-thumb" />
            <div className="news-content">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-desc">{item.desc}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </a>
        ))}
      </div>
      
    </div>
    <HeaderNav />
    </div>
  );
}

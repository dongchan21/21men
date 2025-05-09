// FourBoxPage.jsx
import React, { useState, useEffect } from 'react';
import './FourBoxPage.css';
import HeaderNav from './components/ui/HeaderNav';
import { Button } from './components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FourBoxPage() {
  const [popupBox, setPopupBox] = useState(null);
  const [nextPopupBox, setNextPopupBox] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [boxEntered, setBoxEntered] = useState(false);
  const location = useLocation();
  const address = location.state?.address || "";
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => setBoxEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const boxes = [
    { id: 1, title: '스마트 온실', image: '/src/assets/onsil_pic.png' },
    { id: 2, title: '수직 농장', image: '/src/assets/vertical_pic.png' },
    { id: 3, title: '식물 공장', image: '/src/assets/gongjang_pic.png' },
    { id: 4, title: '컨테이너형 스마트팜', image: '/src/assets/container_pic.png' }
  ];

  const handleClick = (box) => {
    if (popupBox && popupBox.id !== box.id) {
      setIsLeaving(true);
      setTimeout(() => {
        setPopupBox(box);
        setIsLeaving(false);
      }, 400);
    } else {
      setPopupBox(box);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPopupBox(null);
      setIsClosing(false);
    }, 400);
  };

  return (
    <div className="page-container">
      <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 style={{ margin: 0, fontSize: '20px' }}>Resource Corp.</h2>
        </div>
      </header>

      <div className="page">
        <div className="region-label">
          {(() => {
            const trimmed = address.trim();
            if (trimmed === "울산광역시 북구 신천동 548-1")
              return <>당신의 주소는 <strong className="region-type green">농업진흥지역</strong>에 해당합니다.</>;
            if (trimmed === "강원특별자치도 태백시 화전동 322-34")
              return <>당신의 주소는 <strong className="region-type blue">일반 농지</strong>에 해당합니다.</>;
            if (trimmed === "경기도 성남시 수정구 사송동 687")
              return <>당신의 주소는 <strong className="region-type red">개발제한구역(그린벨트)</strong>에 해당합니다.</>;
            return <>당신의 주소는 <strong className="region-type gray">미분류 지역</strong>입니다.</>;
          })()}
        </div>
        <div className="content-group">
          <div className={`box-grid${popupBox ? ' with-popup' : ''} ${boxEntered ? 'box-entered' : ''}`}>
            {boxes.map((box) => {
              let highlightClass = "";

              if (address.trim() === "강원특별자치도 태백시 화전동 322-34") {
                highlightClass = "highlighted-box-green";
              } else if (address.trim() === "경기도 성남시 수정구 사송동 687") {
                highlightClass = "highlighted-box-red";
              } else if (address.trim() === "울산광역시 북구 신천동 548-1") {
                highlightClass = box.id === 1 ? "highlighted-box-green" : "highlighted-box-red";
              } else {
                highlightClass = "highlighted-box-red";
              }
              

              return (
                <div
                  key={box.id}
                  className={`box ${highlightClass}`}
                  onClick={() => handleClick(box)}
                >
                  <img src={box.image} alt={box.title} className="box-image" />
                  <div className="box-title">{box.title}</div>
                </div>
              );
            })}


          </div>

          {popupBox && (
            <div className={`popup ${isLeaving ? 'popup-leave-up' : ''} ${isClosing ? 'popup-leave-close' : 'popup-slide-in'}`}>
              <div className="popup-header">
                <div className="popup-title-group">
                  <strong className="popup-title">{popupBox.title}</strong>

                  {/* 건설 여부 표시 */}
                  {(() => {
                    const addressTrimmed = address.trim();
                      const isGreen =
                      addressTrimmed === "강원특별자치도 태백시 화전동 322-34" ||
                      (addressTrimmed === "울산광역시 북구 신천동 548-1" && popupBox.id === 1);

                    const isRed =
                      addressTrimmed === "경기도 성남시 수정구 사송동 687" ||
                      (addressTrimmed === "울산광역시 북구 신천동 548-1" && popupBox.id !== 1) ||
                      (!isGreen); // ✅ 여기만 사용

                    if (isGreen) {
                      return <div className="buildable-label green">✅ 건설 가능!</div>;
                    } else if (isRed) {
                      return <div className="buildable-label red">❌ 건설 불가능...</div>;
                    } else {
                      return null;
                    }
                  })()}
                </div>

                <button onClick={handleClose}>닫기</button>
              </div>


              <p className="popup-description">
                {popupBox.title === "스마트 온실" &&
                  "센서와 자동제어 시스템으로 온도·습도 등 환경을 조절해 작물 생장을 최적화하는 지능형 온실."}
                {popupBox.title === "수직 농장" &&
                  "다층 구조로 작물을 재배하여 공간 효율을 높이고 생산성을 극대화한 농업 방식."}
                {popupBox.title === "식물 공장" &&
                  "인공조명과 폐쇄 환경을 이용해 연중 안정적인 작물 생산이 가능한 시스템."}
                {popupBox.title === "컨테이너형 스마트팜" &&
                  "컨테이너 내부에 스마트팜 기술을 탑재해 설치와 이동이 간편한 소형 재배 시스템."}
              </p>

              {(() => {
                const trimmed = address.trim();

                 if (trimmed === "울산광역시 북구 신천동 548-1" && popupBox.id === 1) {
                  return (
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', border: '1px solid #ccc', fontSize: '14px' }}>
                      <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 농업진흥지역은 농업시설 중 일부만 제한적으로 허용됩니다.</p>
                      <p style={{ margin: 0, lineHeight: '1.4' }}>
                        📞 <strong>관할 지자체 안내</strong><br />
                        울산광역시 북구청 농수산과<br />
                        전화: <a href="tel:052-241-7652">052-241-7652</a>
                      </p>
                    </div>
                  );
                } else if (trimmed === "강원특별자치도 태백시 화전동 322-34") {
                  return (
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', border: '1px solid #ccc', fontSize: '14px' }}>
                      <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 모든 시설은 지자체 허가 및 농지전용 협의 절차 필요합니다.</p>
                      <p style={{ margin: 0, lineHeight: '1.4' }}>
                        📞 <strong>관할 지자체 안내</strong><br />
                        태백시청 농업기술센터 농업정책팀<br />
                        전화: <a href="tel:033-550-2781">033-550-2781</a>
                      </p>
                    </div>
                  );
                } else if (trimmed === "경기도 성남시 수정구 사송동 687") {
                  return (
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', border: '1px solid #ccc', fontSize: '14px' }}>
                      <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>📌 개발제한구역은 원칙적으로 농업시설 포함한 대부분의 시설 설치가 제한됩니다. 예외적 허용은 지자체 협의를 통해 판단됩니다.</p>
                      <p style={{ margin: 0, lineHeight: '1.4' }}>
                        📞 <strong>관할 지자체 안내</strong><br />
                        성남시청 도시계획과<br />
                        전화: <a href="tel:031-729-3671">031-729-3671</a>
                      </p>
                    </div>
                  );
                }
              return null;
            })()}


              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Button onClick={() => navigate("/jiwon")}>지원 자격 확인!</Button>
              </div>
            </div>
          )}


        </div>
      </div>

      <HeaderNav />
    </div>
  );
} 

// FourBoxPage.jsx
import React, { useState, useEffect } from 'react';
import './FourBoxPage.css';
import HeaderNav from './components/ui/HeaderNav';
import { Button } from './components/ui/button';

export default function FourBoxPage() {
  const [popupBox, setPopupBox] = useState(null);
  const [nextPopupBox, setNextPopupBox] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [boxEntered, setBoxEntered] = useState(false);

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
        <div className="content-group">
          <div className={`box-grid${popupBox ? ' with-popup' : ''} ${boxEntered ? 'box-entered' : ''}`}>
            {boxes.map((box) => (
              <div key={box.id} className="box" onClick={() => handleClick(box)}>
                <img src={box.image} alt={box.title} className="box-image" />
                <div className="box-title">{box.title}</div>
              </div>
            ))}
          </div>

          {popupBox && (
            <div className={`popup ${isLeaving ? 'popup-leave-up' : ''} ${isClosing ? 'popup-leave-close' : 'popup-slide-in'}`}>
              <div className="popup-header">
                <strong>{popupBox.title}</strong>
                <button onClick={handleClose}>닫기</button>
              </div>
              <p>지원 관련 정보를 여기에 표시합니다.</p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Button onClick={() => alert('지원 자격 확인 페이지로 이동')}>지원 자격 확인!</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <HeaderNav />
    </div>
  );
} 

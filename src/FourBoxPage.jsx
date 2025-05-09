import React, { useState } from 'react';
import './FourBoxPage.css';
import { Card, CardContent } from "./components/ui/card";
import HeaderNav from "./components/ui/HeaderNav";

export default function FourBoxPage() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [popupBox, setPopupBox] = useState(null);
  const [animateGrid, setAnimateGrid] = useState(false);

  const boxes = [
    { id: 1, title: '스마트 온실', content: '질문 : ~~~?', image : '/src/assets/onsil_pic.png'},
    { id: 2, title: '수직 농장', content: '질문 : ~~~?', image : '/src/assets/vertical_pic.png' },
    { id: 3, title: '식물 공장', content: '질문 : ~~~?', image : '/src/assets/gongjang_pic.png' },
    { id: 4, title: '컨테이너형 스마트팜', content: '질문 : ~~~?', image : '/src/assets/container_pic.png' }
  ];

  const handleClick = (box) => {
    setPopupBox(box);
    requestAnimationFrame(() => {
      setAnimateGrid(true);
      setTimeout(() => setSelectedBox(box), 300);
    });
  };

  const handleClose = () => {
    setAnimateGrid(false);
    setTimeout(() => {
      setPopupBox(null);
      setSelectedBox(null);
    }, 300);
  };

  return (
    <div className="page-container">
      <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 style={{ margin: 0, fontSize: '20px' }}>Resource Corp.</h2>
        </div>
      </header>
      <div className={`page ${popupBox ? 'with-popup' : 'centered'}`}>
        <div className={`box-grid ${animateGrid ? 'animate' : ''}`}>
          {boxes.map((box) => (
            <div
              key={box.id}
              className="box"
              onClick={() => handleClick(box)}
            >
              {box.image && (
                <img src={box.image} alt={box.title} className="box-image" />
              )}
              <div style={{ textAlign: "center" }} className="box-title">{box.title}</div>
            </div>
          ))}
        </div>

        {selectedBox && (
          <div className="popup">
            <div className="popup-header">
              <strong>{selectedBox.title}</strong>
              <button onClick={handleClose}>닫기</button>
            </div>
            <p>{selectedBox.content}</p>
          </div>
        )}
      </div>
      <HeaderNav />
    </div>
  );
}

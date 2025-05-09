import React, { useState } from 'react';
import './FourBoxPage.css';
import { Card, CardContent } from "./components/ui/card";
import HeaderNav from "./components/ui/HeaderNav";
import AgePage from './AgePage';


export default function FourBoxPage() {
  const [selectedBox, setSelectedBox] = useState(null);
  const boxes = [
    { id: 1, title: '스마트 온실', content: '질문 : ~~~?', image : '/src/assets/onsil_pic.png'},
    { id: 2, title: '수직 농장', content: '질문 : ~~~?', image : '/src/assets/sujik_pic.png' },
    { id: 3, title: '식물 공장', content: '질문 : ~~~?', image : '/src/assets/gongjang_pic.png' },
    { id: 4, title: '컨테이너형 스마트팜', content: '질문 : ~~~?', image : '/src/assets/container_pic.png' }
  ];

  return (
        <div className="page-container">
          <HeaderNav />
      <div className={`page ${selectedBox ? 'with-popup' : 'centered'}`}>
        <div className="box-grid">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="box"
              onClick={() => setSelectedBox(box)}
            >
                                <div className="box-title">{box.title}</div>

              {box.image && (
                    <img src={box.image} alt={box.title} className="box-image" />
                  )}
                  </div>
          ))}
        </div>

        {selectedBox && (
          <div className="popup">
            <div className="popup-header">
              <strong>{selectedBox.title}</strong>
              <button onClick={() => setSelectedBox(null)}>닫기</button>
            </div>
            <p>{selectedBox.content}</p>
          </div>
        )}
      </div>
        </div>
  );
}


// src/HomePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ 추가
import HeaderNav from "./components/ui/HeaderNav";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";

export default function HomePage() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 style={{ margin: 0, fontSize: '20px' }}>Farm Link</h2>
        </div>
      </header>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 80 }}       // 아래에서 시작
          animate={{ opacity: 1, y: 0 }}         // 위로 올라오며 나타남
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card style={{
    width: "400px",
    height: "auto",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // ✅ 그림자 강조
    borderRadius: "16px"
  }}>
            
              <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
        내 땅에 설치 가능한 스마트팜을 알려드릴게요!
      </h2>

      <div style={{
        display: 'inline-block',
        backgroundColor: '#e6f4ea',
        color: '#2d7a42',
        borderRadius: '999px',
        padding: '6px 16px',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '16px'
      }}>
        내 토지에 적합한 스마트팜 유형 🧑‍🌾 최대 4가지 선택 가능!
      </div>


      <div style={{ textAlign: 'left', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
        <p><strong>✅ 복잡한 법적 조건은 저희가 다 확인했어요</strong><br />설치 가능 여부만 간편하게 확인하세요.</p>
        <p><strong>🗺️ 위치 기반으로 확인해요</strong><br />지역마다 다른 정책, 주소 한 번으로 정리해드려요.</p>
        <p><strong>📚 설치 가능 여부뿐 아니라</strong><br />각 스마트팜 유형의 특징과 장단점도 함께 정리해드려요.</p>
      </div>
      {/* 주소 입력 필드 */}
      <Input
                  placeholder="주소를 입력하세요"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
         <br></br>
         <br></br>
      {/* 버튼 텍스트 변경 */}
      <button onClick={() => navigate("/result", { state: { address } })}style={{
        width: '100%',
        backgroundColor: '#1aaf5d',
        color: '#fff',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        설치 가능 스마트팜 확인하기
      </button>
    </div>
          </Card>
        </motion.div>
      </div>

      <HeaderNav />
    </div>
  );
}

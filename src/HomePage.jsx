// src/HomePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
          <h2 style={{ margin: 0, fontSize: '20px' }}>Resource Corp.</h2>
        </div>
      </header>
      <div className="container">
        <Card style={{ width: "400px", height: "300px" }}>
          <CardContent>
            <h1 className="title">지원금을 받아봐요!</h1>
            <div className="form-group">
              <Input
                placeholder="땅의 주소를 입력하세요"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button onClick={() => navigate("/result", { state: { address } })}>확인하기</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <HeaderNav />
    </div>
  );
}

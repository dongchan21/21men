import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./components/ui/HeaderNav";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import "./AgePage.css";
import "./App.css";

export default function AgePage() {
  const [age, setAge] = useState(30);
  const rangeRef = useRef(null);
  const [labelLeft, setLabelLeft] = useState("0px");
  const navigate = useNavigate();

  const min = 0;
  const max = 100;

  useEffect(() => {
    const range = rangeRef.current;
    if (range) {
      const percent = (age - min) / (max - min);
      const width = range.offsetWidth;
      const thumbWidth = 40;
      const labelOffset = percent * (width - thumbWidth) + thumbWidth / 2;
      setLabelLeft(`${labelOffset}px`);
    }
  }, [age]);

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
            <h1 className="title">나이가 어떻게 되시나요?</h1>
            <div className="slider-wrapper">
              <div
                className="slider-label"
                style={{ left: labelLeft }}
              >
                {age}세
              </div>
              <input
                type="range"
                min={min}
                max={max}
                value={age}
                ref={rangeRef}
                onChange={(e) => setAge(Number(e.target.value))}
              />

              <Button onClick={()=>navigate("/home")}>다음</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <HeaderNav />
    </div>
  );
}

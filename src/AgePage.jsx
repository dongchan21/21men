import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./components/ui/HeaderNav";
import { Card, CardContent } from "./components/ui/card";
import "./AgePage.css";

export default function AgePage() {
  const [age, setAge] = useState(30);
  const rangeRef = useRef(null);
  const [labelLeft, setLabelLeft] = useState("0px");

  const min = 0;
  const max = 100;

  useEffect(() => {
    const range = rangeRef.current;
    if (range) {
      const percent = (age - min) / (max - min);
      const width = range.offsetWidth;
      const thumbWidth = 40; // tree.png width
      const labelOffset = percent * (width - thumbWidth) + thumbWidth / 2;
      setLabelLeft(`${labelOffset}px`);
    }
  }, [age]);

  return (
    <div className="page-container">
      <HeaderNav />
      <div className="container">
        <Card>
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

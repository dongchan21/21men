// src/ResultPage.jsx
import { useLocation } from "react-router-dom";
import HeaderNav from "./components/ui/HeaderNav";
import { Card, CardContent } from "./components/ui/card";

export default function ResultPage() {
  const location = useLocation();
  const address = location?.state?.address || "";

  const supportsVerticalFarm = address.includes("서울");
  const supportsOtherFarm = address.length > 0;

  return (
    <div className="page-container">
      <HeaderNav />
      <div className="container">
        <Card>
          <CardContent>
            <h2 className="title">지원 자격 결과</h2>
            <p>입력한 주소: <strong>{address}</strong></p>
            <div style={{ marginTop: "1rem" }}>
              <p>수직농장 설치 가능 여부: <strong>{supportsVerticalFarm ? "가능" : "불가능"}</strong></p>
              <p>기타 스마트팜 설치 가능 여부: <strong>{supportsOtherFarm ? "가능" : "불가능"}</strong></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

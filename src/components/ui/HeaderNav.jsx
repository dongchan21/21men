import { useNavigate, useLocation } from "react-router-dom";
import "./HeaderNav.css"; // 스타일 적용

export default function HeaderNav({ hideNav = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const stepMap = {
    "/age": 0,
    "/home": 1,
    "/result": 2,
    "/lastpage": 3,
  };

  const currentStep = stepMap[location.pathname.replace(/\/$/, "")] ?? 0;
  const totalSteps = 4;
  const progressPercent = (currentStep / (totalSteps - 1)) * 100;

  return (
    <header className={`main-header ${hideNav ? "header-empty" : ""}`}>
      {!hideNav && (
        <>
          <button className="text-button" onClick={() => window.history.back()}>
            ← 이전
          </button>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          
          <button className="text-button" onClick={() => navigate("/")}>
            Home
          </button>
        </>
      )}
    </header>

  );
}

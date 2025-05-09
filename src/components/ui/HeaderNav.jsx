// src/components/HeaderNav.jsx
import { useNavigate } from "react-router-dom";

export default function HeaderNav() {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <button className="text-button" onClick={() => window.history.back()}>← 이전</button>
      <button className="text-button" onClick={() => navigate("/")}>Home</button>
    </header>
  );
}

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import AgePage from "./AgePage";
import ResultPage from "./ResultPage";

import "./App.css"
import "./HomePage.css";
import "./MainPage.css";
import "./AgePage.css";
import "./ResultPage.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/age" element={<AgePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

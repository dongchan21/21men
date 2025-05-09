// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import ResultPage from "./ResultPage";
import FourBoxPage from "./FourBoxPage";

import "./App.css"
import "./HomePage.css";
import "./MainPage.css";
import "./FourBoxPage.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/result" element={<FourBoxPage />} />
      </Routes>
    </Router>
  );
}

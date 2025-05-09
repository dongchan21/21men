// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import AgePage from "./AgePage";
import FourBoxPage from "./FourBoxPage";
import JiwonPage from "./JiwonPage";

import "./App.css"
import "./HomePage.css";
import "./MainPage.css";
import "./AgePage.css";
import "./FourBoxPage.css";
import "./JiwonPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JiwonPage/>} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/age" element={<AgePage />} />
        <Route path="/result" element={<FourBoxPage />} />
      </Routes>
    </Router>
  );
}

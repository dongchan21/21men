import { useState } from "react";
import "./JiwonPage.css";
import HeaderNav from "./components/ui/HeaderNav";


export default function JiwonPage() {
    const [answers, setAnswers] = useState({
    isOperatingFarm: false,
    age: "",
    crops: [], // ✅ 기존 crop → crops (배열)
    hasFarmReg: false,
    hasExperience: null,
    educationCompleted: false,
    gradMajor: false,
    area: 0,
    });

const handleChange = (key, value) => {
  if (key === "isOperatingFarm" && value === false) {
    setAnswers((prev) => ({
      isOperatingFarm: false,
      age: prev.age, // 🔥 나이만 유지
      crops: [],
      hasFarmReg: false,
      hasExperience: null,
      educationCompleted: false,
      gradMajor: false,
      area: 0,
    }));
  } else {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }
};


  const eligiblePrograms = [];
  const ageNum = parseInt(answers.age);
  const crops = answers.crop;
  const isFarmOperating = answers.isOperatingFarm;
  const selectedCrops = answers.crops || [];

  if (ageNum >= 18 && ageNum < 40) {
    eligiblePrograms.push("🌱 청년 스마트팜 창업 보육사업");
    if (answers.educationCompleted || answers.gradMajor) {
      eligiblePrograms.push("💰 스마트팜 종합자금 대출");
    }
  }

    if (selectedCrops.includes("과일") && answers.hasFarmReg && answers.area >= 1000) {
        eligiblePrograms.push("🍎 과수 분야 스마트팜 확산 사업");
        }

        if (
        selectedCrops.some((c) => ["채소", "화훼", "버섯", "인삼"].includes(c)) &&
        answers.hasFarmReg
        ) {
        eligiblePrograms.push("💡 2024년 스마트팜 ICT융복합확산사업");
        }

        
        if (
        selectedCrops.some((c) => ["채소", "화훼"].includes(c)) &&
        answers.hasFarmReg &&
        answers.hasExperience &&
        answers.area >= 1000
        ) {
        eligiblePrograms.push("🏡 온실신축 스마트팜 사업");
        }

    const isYoung = ageNum >= 18 && ageNum < 40;
    const isGeneralCrop = isFarmOperating && selectedCrops.some((c) =>
        ["과일", "채소", "화훼", "버섯", "인삼"].includes(c)
        );

    const isFruitCrop = isFarmOperating && selectedCrops.includes("과일");
    const isVegetableOrFlower = isFarmOperating && selectedCrops.some((c) =>
        ["채소", "화훼"].includes(c)
        );

    const isAreaRelevant = isFarmOperating && selectedCrops.some((c) =>
        ["과일", "채소", "화훼"].includes(c)
        );

    const isExperienceRelevant = isVegetableOrFlower;


  return (
    <div className="page-container">
        <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 style={{ margin: 0, fontSize: '20px' }}>Resource Corp.</h2>
        </div>
      </header>
      <div className="container">
        
      <div className="question-section">
        
        {/* 나이 체크 */}
        <div className="q">
            
          <label>
            🎂 만 18세 이상 만 40세 이하인가요?
            <input
              type="checkbox"
              checked={ageNum === 30}
              onChange={(e) => handleChange("age", e.target.checked ? 30 : 17)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        {/* 농가 운영 여부부 */}
        <div className="q">
        <label>
            🧑‍🌾 현재 농가를 운영하고 계신가요?
            <input
            type="checkbox"
            checked={answers.isOperatingFarm}
            onChange={(e) => handleChange("isOperatingFarm", e.target.checked)}
            style={{ marginLeft: "10px" }}
            />
        </label>
        </div>

        {/* 작물 선택 */}
        <div className="q" style={{ opacity: isFarmOperating ? 1 : 0.5 }}>
            <label>🌾 재배 중인 작물은 무엇인가요?</label>
            <div>
                {["과일", "채소", "화훼", "버섯", "인삼", "기타"].map((crop) => (
                <label key={crop} style={{ marginRight: "10px" }}>
                    <input
                    type="checkbox"
                    disabled={!isFarmOperating}
                    checked={answers.crops.includes(crop)}
                    onChange={(e) => {
                        const newCrops = e.target.checked
                        ? [...answers.crops, crop]
                        : answers.crops.filter((c) => c !== crop);
                        handleChange("crops", newCrops);
                    }}
                    />
                    {crop}
                </label>
                ))}
            </div>
            </div>

        {/* 농업경영체 등록 */}
        <div className="q" style={{ opacity: isGeneralCrop ? 1 : 0.5 }}>
          <label>
            📝 농업경영체 등록을 하셨나요?
            <input
              type="checkbox"
              disabled={!isFarmOperating || !isGeneralCrop}
              checked={answers.hasFarmReg}
              onChange={(e) => handleChange("hasFarmReg", e.target.checked)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        {/* 재배경험 */}
        <div className="q" style={{ opacity: isExperienceRelevant ? 1 : 0.5 }}>
            <label>
                ⏳ 해당 작물을 3년 이상 재배했거나 온실 운영 경험이 있나요?
                <input
                type="checkbox"
                disabled={!isFarmOperating || !isExperienceRelevant}
                checked={answers.hasExperience === true}
                onChange={(e) => handleChange("hasExperience", e.target.checked)}
                style={{ marginLeft: "10px" }}
                />
            </label>
            </div>

        {/* 면적 */}
            <div className="q" style={{ opacity: isAreaRelevant ? 1 : 0.5 }}>
            <label>
                📐 재배 면적이 1,000㎡ 이상인가요?
                <input
                type="checkbox"
                disabled={!isFarmOperating || !isAreaRelevant}
                checked={answers.area >= 1000}
                onChange={(e) => handleChange("area", e.target.checked ? 1000 : 0)}
                style={{ marginLeft: "10px" }}
                />
            </label>
            </div>

        {/* 교육 이수 */}
        <div className="q" style={{ opacity: isYoung ? 1 : 0.5 }}>
          <label>
            🎓 스마트팜 보육센터 교육을 이수하셨나요?
            <input
              type="checkbox"
              disabled={!isYoung}
              checked={answers.educationCompleted}
              onChange={(e) => handleChange("educationCompleted", e.target.checked)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        {/* 전공 여부 */}
        <div className="q" style={{ opacity: isYoung ? 1 : 0.5 }}>
          <label>
            🏫 농업 관련 학과를 졸업하셨나요?
            <input
              type="checkbox"
              disabled={!isYoung}
              checked={answers.gradMajor}
              onChange={(e) => handleChange("gradMajor", e.target.checked)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
      </div>

      <div className="result-section">
        <h3>📋 지원 가능 사업</h3>
        {eligiblePrograms.length === 0 ? (
            <p>조건에 맞는 지원 사업이 없습니다.</p>
        ) : (
            <div className="program-list">
            {eligiblePrograms.map((program) => (
                <div
                key={program}
                className="program-card"
                onClick={() => alert(`'${program}' 상세 정보를 보여줄 수 있어요.`)}
                >
                {program}
                </div>
            ))}
            </div>
        )}
        </div>
    
    </div>
    <HeaderNav />
    </div>
  );
}

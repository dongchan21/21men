import { useState } from "react";
import "./JiwonPage.css";
import HeaderNav from "./components/ui/HeaderNav";


export default function JiwonPage() {
    const [expanded, setExpanded] = useState(null);
    const getProgramDescription = (name) => {
  switch (name) {
    case "🌱 청년 스마트팜 창업 보육사업":
      return <div style={{
    marginTop: '8px',
    padding: '16px',
    backgroundColor: '#f9fbff',
    border: '1px solid #cce0ff',
    borderRadius: '12px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.6'
  }}>
        <strong>📌 사업 목적</strong><br />
        만 18세 이상 39세 이하 청년에게 스마트팜 영농기술을 <br />
        기초부터 경영까지 실습 중심으로 교육하고, 전문가 컨설팅을 통해 영농 정착 지원<br /><br />

        <strong>👤 대상 및 자격</strong><br />
        - 대한민국 국적의 18~39세 청년<br />
        - 스마트팜 혁신밸리 4개 지역(전북, 전남, 경북, 경남)<br />
        - 기존 교육 수료자는 제외 (단, 승인된 중도 포기자는 예외)<br /><br />

        <strong>💰 지원 내용</strong><br />
        - 국비 100% 지원<br />
        - 교육비, 강사비, 장비 임차, 실습비, 식비, 숙박비 등<br />
        - 2025년 총 예산: 80억 원<br />
        - 일반관리비는 총 교육비의 30% 이내<br /><br />

        <strong>📅 일정</strong><br />
        - 4월: 스마트팜코리아에 모집 공고 예정<br />
        - 7월: 적격심사 및 면접을 통해 선발<br /><br />

        <strong>☎ 문의처</strong><br />
        - 농림축산식품부: 044-201-2425 / 2422<br />
        - 농업기술진흥원: 063-919-1770 / 1772<br />
        - 보육센터(전북·전남·경북·경남): 063-290-6434 외
        <br></br>
        <br></br>
        <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14878" target="_blank" rel="noopener noreferrer">
          <strong>🔗 관련 링크</strong>
        </a>
      </div>;
    case "💰 스마트팜 종합자금 대출":
      return <div
  style={{
    marginTop: '8px',
    padding: '16px',
    backgroundColor: '#f9fbff',
    border: '1px solid #cce0ff',
    borderRadius: '12px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.6'
  }}
>
  <strong>💡 스마트팜 종합자금 대출이란?</strong><br />
  스마트팜 설치를 희망하는 청년농업인이나, 현재 스마트팜을 운영 중인 농업인(또는 농업법인)에게 제공되는 정책자금입니다.<br /><br />

  <strong>👥 신청 대상</strong><br />
  <u>청년 스마트팜 대상자:</u> 생애 최초 스마트팜 설치 희망자 중 다음 조건에 해당하는 만 40세 미만 개인<br />
  - 농업계 고등학교 또는 대학의 농업관련 학과 졸업자<br />
  - 스마트팜 청년창업 보육센터(상주·김제·밀양·고흥) 교육 이수자<br />
  <u>일반 스마트팜 대상자:</u> 농업인 또는 농업법인(농업회사법인, 영농조합법인)<br /><br />

  <strong>⏳ 대출 기간</strong><br />
  - 운전자금: 최대 2년 이내 (일시상환)<br />
  - 시설자금: 최대 25년 (5년 거치, 20년 분할상환)<br />
  - 개보수자금: 5~10년 (2~3년 거치, 3~7년 분할상환)<br />
  - 기계장비 구입: 5년 (2년 거치, 3년 분할상환)<br /><br />

  <strong>💵 대출 한도</strong><br />
  - 청년농업인 스마트팜: 1인당 최대 30억 원<br />
  - 일반 스마트팜: 1인당 최대 50억 원 (청년 포함)<br /><br />

  <strong>📈 대출 금리</strong><br />
  - 운전자금: 고정금리(1.5%) 또는 변동금리(6개월 단위)<br />
  - 시설·개보수자금: 고정금리(1.0%)<br /><br />

  <strong>📞 대출 상담</strong><br />
  - 가까운 농협은행 시군지부 및 지점<br />
  - NH농협은행 고객행복센터: 1661-3000
  <br></br>
  <br></br>
  <a href="https://www.smartfarmkorea.net/contents/view.do?menuId=M1102010103" target="_blank" rel="noopener noreferrer">
          <strong>🔗 관련 링크</strong>
        </a>
</div>

    case "🍎 과수 분야 스마트팜 확산 사업":
      return <div
  style={{
    marginTop: '8px',
    padding: '16px',
    backgroundColor: '#f9fbff',
    border: '1px solid #cce0ff',
    borderRadius: '12px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.6'
  }}
>
  <strong>📌 사업 목적</strong><br />
  ICT 시설장비 도입을 통해 노동력을 절감하고 고품질 과수를 생산하여 과수산업 경쟁력 확보<br /><br />

  <strong>🌳 대상 및 자격</strong><br />
  - 사과, 배, 감귤 등을 재배하며 ICT 융복합 시설 적용이 가능한 과수 농업경영체<br />
  - 농업경영체 등록 필수<br />
  - 가온시설 운영 농가, 열대·아열대 과수 재배 농가 등은 제외<br /><br />

  <strong>💡 지원 내용</strong><br />
  - 온습도, 병해충 예찰, 관수·시비 제어 등 ICT 융복합 시설 및 정보시스템<br />
  - 관정, 무인방제시설, 자동개폐기, 환풍기 등 ICT 연계 장비도 조건부 포함<br /><br />

  <strong>💰 지원 조건 및 예산</strong><br />
  - 총 사업비 기준 보조 50%(국고 20%, 지방비 30%), 이차보전 30%, 자부담 20%<br />
  - 이차보전 조건: 고정금리 2.0% 또는 변동금리(시중금리 -2.0%)<br />
  - 대출 상환: 3년 거치 7년 균등분할상환<br />
  - 사업비 상한: 2억 원<br />
  - 2025년 예산: 총 12억 원 (국비 2.4억, 지방비 3.6억, 자부담 6억)<br /><br />

  <strong>📝 신청 방법 및 일정</strong><br />
  - 시·군·구청에 신청서 제출 및 e나라도움 등록<br />
  - 신청기간: 2025년 3~4월<br />
  - 대상자 선정: 서면평가 및 현장평가 후 농식품부 결정<br /><br />

  <strong>📞 문의처</strong><br />
  - 농식품부 원예경영과: 044-201-2254 / 2255<br />
  - 농수산식품유통공사 산지유통부: 044-931-1095
  <br></br>
  <br></br>
  <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14782" target="_blank" rel="noopener noreferrer">
          <strong>🔗 관련 링크</strong>
        </a>
</div>

    case "💡 2024년 스마트팜 ICT융복합확산사업":
      return <div
  style={{
    marginTop: '8px',
    padding: '16px',
    backgroundColor: '#f9fbff',
    border: '1px solid #cce0ff',
    borderRadius: '12px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.6'
  }}
>
  <strong>📌 사업 목적</strong><br />
  - 온·습도 자동 제어 등 스마트팜 환경관리 시스템 보급<br />
  - 원예작물 품질 향상과 수출 기반 구축<br />
  - 농자재 가격 상승에 대응한 에너지 절감 자재 지원<br /><br />

  <strong>🌱 사업 내용</strong><br />
  - 스마트팜 ICT 시설 설치 및 컨설팅<br />
  - 원예시설 현대화를 위한 자재·설비(관수관비, 환경관리, 무인방제기 등)<br />
  - 에너지 절감시설(다겹보온커튼, 자동보온덮개 등) 설치<br /><br />

  <strong>👥 신청 대상</strong><br />
  - 고정식 재배시설(온실, 수직농장 등)에서 채소, 화훼, 특용작물(버섯, 인삼 등) 재배 중인 농업인·법인·생산자단체<br /><br />

  <strong>💰 지원 조건 및 예산</strong><br />
  - 시설 설치: 국비 25%, 지방비 30%, 융자 25%(이차보전), 자부담 20%<br />
  - 컨설팅: 국비 100% 지원<br />
  - 2025년 사업비: 약 607억 원 (국비 약 154억, 지방비 약 180억 포함)<br /><br />

  <strong>📝 신청 방법 및 일정</strong><br />
  - 신청 장소: 관할 시·군·구청<br />
  - 신청 시기: 전년도 7~8월 (지자체별 공고)<br />
  - 선정 방법: 시·군·구 선정위원회 심의<br /><br />

  <strong>📞 문의처</strong><br />
  - 농림축산식품부 원예경영과: 044-201-2256 / 2259<br />
  - 한국농어촌공사 스마트팜사업부 (컨설팅): 061-338-5721 / 5729<br />
  - 각 지자체 담당 부서(시·군·구청) 문의
  <br></br>
  <br></br>
  <a href="hhttps://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14939" target="_blank" rel="noopener noreferrer">
          <strong>🔗 관련 링크</strong>
        </a>
</div>

    case "🏡 온실신축 스마트팜 사업":
      return <div
  style={{
    marginTop: '8px',
    padding: '16px',
    backgroundColor: '#f9fbff',
    border: '1px solid #cce0ff',
    borderRadius: '12px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.6'
  }}
>
  <strong>📌 사업 목적</strong><br />
  - 스마트팜 기반의 철골·자동화 온실 신축 및 개보수를 지원하여<br />
  - 안정적 생산기반을 구축하고 FTA 등 시장개방에 대응<br /><br />

  <strong>🌱 지원 대상</strong><br />
  - 채소·화훼류 재배 농업인, 농업법인, 생산자단체 (버섯·인삼 제외)<br />
  - 신축 시설에 대한 3년 이상 재배 또는 온실 운영 경력 필수<br /><br />

  <strong>🏗️ 지원 내용</strong><br />
  - 철골(유리/경질판) 온실 또는 자동화 비닐온실의 신·개축 비용<br />
  - 내부 ICT 융복합 장비 포함 (센서, 영상, 통합제어, 환기, 관수 등)<br />
  - 연계 시설: 양액시설, 자동개폐기, 통신주 등<br /><br />

  <strong>💰 지원 조건 및 예산</strong><br />
  - 보조 50% (국고 20%, 지방비 30%), 융자(이차보전) 30%, 자부담 20%<br />
  - 2025년 사업비: 총 120억 원 (국비 24억, 지방비 36억 포함)<br /><br />

  <strong>📁 신청 방법</strong><br />
  - 신청 장소: 사업예정지 관할 시·군·구청<br />
  - 신청 시기: 전년도 6~7월경 (지자체 공고 참고)<br />
  - 선정 방식: 농식품부 주관 공모 평가<br /><br />

  <strong>📏 부지 및 요건</strong><br />
  - 0.3ha~2.0ha 규모의 연동 또는 인접 단동 온실 가능<br />
  - 12년 이상 장기임대 또는 자가소유 부지 필요<br /><br />

  <strong>🧱 사업 유형</strong><br />
  - 위탁설계형: 설계+시공 모두 농어촌공사 위탁<br />
  - 자가설계형: 시공만 위탁, 설계는 자부담 직접 실시<br /><br />

  <strong>📞 문의처</strong><br />
  - 농림축산식품부 원예경영과: 044-201-2256 / 2259<br />
  - 한국농어촌공사 스마트팜사업부: 061-338-5721 / 5729
  <br></br>
  <br></br>
  <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14773" target="_blank" rel="noopener noreferrer">
          <strong>🔗 관련 링크</strong>
        </a>
</div>
    default:
      return "해당 사업에 대한 설명은 준비 중입니다.";
  }
};
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
        <ul>
  {eligiblePrograms.length === 0 ? (
    <li>조건에 맞는 지원 사업이 없습니다.</li>
  ) : (
    eligiblePrograms.map((name) => (
      <li key={name} style={{ marginBottom: '12px' }}>
        <div
          className="program-title"
          onClick={() => setExpanded(expanded === name ? null : name)}
          style={{
            cursor: 'pointer',
            fontWeight: '600',
          }}
          
        >
         {expanded === name ? "▼" : "▶"} {name}
        </div>
        {expanded === name && (
          <div style={{ marginTop: '8px', fontSize: '16px'}}>
            {getProgramDescription(name)}
          </div>
        )}
      </li>
    ))
  )}
</ul>
        </div>
    
    </div>
    <HeaderNav />
    </div>
  );
}

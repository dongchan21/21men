const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const VWORLD_API_KEY = "D5421C2D-F4BA-3402-AB3A-123F8747B9B6";

// 주소 → 좌표 변환 함수
async function geocodeAddress(address) {
  const url = 'https://api.vworld.kr/req/address';
  const params = {
    service: 'address',
    request: 'getcoord',
    format: 'json',
    crs: 'EPSG:4326',
    address: address,
    type: 'parcel',
    key: VWORLD_API_KEY
  };
  const response = await axios.get(url, { params });
  const data = response.data;
  if (data.response.status === 'OK') {
    const point = data.response.result.point;
    return { x: point.x, y: point.y };
  } else {
    throw new Error('주소 변환 실패');
  }
}

// 농업진흥지역 포함 여부 확인 함수
async function checkAgriculturalArea(x, y) {
  const wfsUrl = 'https://api.vworld.kr/req/wfs';
  const params = {
    service: 'WFS',
    version: '1.1.0',
    request: 'GetFeature',
    typeName: 'lt_c_agrixue101', 
    srsName: 'EPSG:4326',
    output: 'application/json',
    filter: `CONTAINS(geometry, POINT(${x} ${y}))`,
    key: VWORLD_API_KEY ,
  };
  const response = await axios.get(wfsUrl, { params });
  console.log('📍 WFS 응답:', JSON.stringify(response.data, null, 2));//테스트
  const data = response.data;
  return (data.features && data.features.length > 0);
}

// API 엔드포인트
app.post('/check-address', async (req, res) => {
  try {
    const { address } = req.body;
    if (!address) {
      return res.status(400).json({ error: '주소를 입력해주세요.' });
    }
    const { x, y } = await geocodeAddress(address);
    console.log(`🛰️ 변환된 좌표: x=${x}, y=${y}`); //테스트
    const isAgricultural = await checkAgriculturalArea(x, y);
    if (isAgricultural) {
      res.json({ result: '설치불가' });
    } else {
      res.json({ result: '설치가능' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
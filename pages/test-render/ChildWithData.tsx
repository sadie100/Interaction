import { useState, memo } from 'react';

const ChildWithData = ({ data, handleData, handleSameData }) => {
  console.log('%c3중첩 렌더', 'color: purple');
  return (
    <div style={{ border: '5px solid purple', margin: '10px' }}>
      <div>나는 차일드 안이고 데이터를 바꿉니다.</div>
      <div>이름 : {data.name} </div>
      <div>나이 : {data.age} </div>
      <button onClick={handleSameData}>데이터 바꾸기</button>
    </div>
  );
};

export default ChildWithData;

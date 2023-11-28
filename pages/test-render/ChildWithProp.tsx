import { useState } from 'react';

const ChildWithProp = ({ data, handleData }) => {
  console.log('ChildWithProp 렌더');
  return (
    <>
      <div>나는 차일드 안이고 데이터를 바꿉니다.</div>
      <div>이름 : {data.name} </div>
      <div>나이 : {data.age} </div>
      <button onClick={handleData}>데이터 바꾸기</button>
    </>
  );
};

export default ChildWithProp;

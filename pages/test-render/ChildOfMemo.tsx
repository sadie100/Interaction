import { memo } from 'react';

const ChildOfMemo = ({ constant }) => {
  console.log('%c메모의 차일드', 'color: lightgreen');
  return (
    <>
      <div style={{ border: '5px solid lightgreen' }}>나는 메모의 차일드입니다.</div>
      <div>constant : {constant}</div>
    </>
  );
};

export default ChildOfMemo;

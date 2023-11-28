import { useState, memo, useMemo } from 'react';
import ChildOfMemo from './ChildOfMemo';

const ChildWithConstant = (props) => {
  const { constant } = props;
  console.log('%c콘스탄스 렌더', 'color: green');
  return (
    <div style={{ border: '5px solid green' }}>
      <div>나는 차일드 안이고 constant 씁니다. constant : {constant}</div>
      {props.children}
    </div>
  );
  return useMemo(
    () => (
      <div style={{ border: '5px solid green' }}>
        <div>나는 차일드 안이고 constant 씁니다. constant : {constant}</div>
        <ChildOfMemo />
      </div>
    ),
    [constant]
  );
};

// export default ChildWithConstant;
export default memo(ChildWithConstant);

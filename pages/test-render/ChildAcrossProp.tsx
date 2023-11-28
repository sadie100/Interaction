import { useState } from 'react';
import ChildWithProp from './ChildWithProp';
import ChildWithPropNotUsing from './ChildWithPropNotUsing';

const ChildAcrossProp = (props) => {
  const { constant } = props;
  console.log('ChildAcrossProp 렌더');
  return (
    <>
      <div>나는 데이터를 넘겨 줍니다.</div>
      <ChildWithProp {...props} />
      <ChildWithPropNotUsing constant={constant} />
    </>
  );
};

export default ChildAcrossProp;

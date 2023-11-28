import { useMemo, useState } from 'react';
import ChildWithData from './ChildWithData';
import ChildWithPropNotUsing from './ChildWithPropNotUsing';
import ChildWithConstant from './ChildWithConstant';
import ChildOfMemo from './ChildOfMemo';

const ChildAcrossProp = (props) => {
  const { constant, ...rest } = props;
  console.log('%cChildAcrossProp 렌더', 'color: red');
  //   const getModifiedPropData = (prop) => {
  //     return {
  //       ...prop.data,
  //       constant
  //     };
  //   };
  //   const newData = getModifiedPropData(props);

  const mChild = useMemo(() => <ChildOfMemo constant={constant} />, []);
  return (
    <div style={{ border: '5px solid red' }}>
      <div>나는 데이터를 넘겨 줍니다.</div>
      <ChildWithData {...rest} />
      <ChildWithConstant>{mChild}</ChildWithConstant>
      {/* <ChildWithPropNotUsing {...newData} /> */}
    </div>
  );
};

export default ChildAcrossProp;

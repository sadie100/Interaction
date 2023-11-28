import { memo } from 'react';

const ChildWithPropNotUsing = (props) => {
  console.log('child not using 렌더');
  return (
    <>
      <div>나는 not using child</div>
    </>
  );
};

export default ChildWithPropNotUsing;

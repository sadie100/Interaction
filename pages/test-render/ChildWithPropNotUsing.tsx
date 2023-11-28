import { memo } from 'react';

const ChildWithPropNotUsing = ({ constant }) => {
  console.log('낫유징 렌더');
  return (
    <>
      <div>나는 data를 쓰지 않는 child 입니다.</div>
      <div>내가 렌더링 되는지 보세요. 콘스탄트 : {constant}</div>
    </>
  );
};

export default memo(ChildWithPropNotUsing);

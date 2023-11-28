import { useMemo, memo } from 'react';

const ChildWithNothing = (props) => {
  console.log('ChildWithNothing render');
  return (
    <div style={{ border: '1px solid blue' }}>
      <div>내겐 data가 넘어오지도 않습니다.</div>
      <div>내가 렌더링 되는지 보세요.</div>
    </div>
  );
};

export default memo(ChildWithNothing);

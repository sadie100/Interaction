import { useState } from "react";

const ChildWithPropNotUsing = (props) => {
  return (
    <>
      <div>나는 data를 쓰지 않는 child 입니다.</div>
      <div>내가 렌더링 되는지 보세요.</div>
    </>
  );
};

export default ChildWithPropNotUsing;

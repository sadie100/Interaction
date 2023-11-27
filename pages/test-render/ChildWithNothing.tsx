import { useState } from "react";

const ChildWithNothing = (props) => {
  return (
    <>
      <div>내겐 data가 넘어오지도 않습니다.</div>
      <div>내가 렌더링 되는지 보세요.</div>
    </>
  );
};

export default ChildWithNothing;

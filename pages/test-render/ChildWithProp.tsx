import { useState } from "react";

const ChildWithProp = ({ data }) => {
  return (
    <>
      <div>나는 차일드 안입니다.</div>
      <div>데이터는 {data}</div>
    </>
  );
};

export default ChildWithProp;

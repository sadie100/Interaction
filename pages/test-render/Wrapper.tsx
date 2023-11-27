import { useState } from "react";
import ChildWithProp from "./ChildWithProp";
import ChildWithPropNotUsing from "./ChildWithPropNotUsing";
import ChildWithNothing from "./ChildWithNothing";

const Wrapper = () => {
  const [data, setData] = useState(0);
  const handleData = () => {
    setData((dat) => dat + 1);
  };
  return (
    <>
      <button onClick={handleData}>데이터를 변경한다.</button>
      <ChildWithProp data={data} />
      <ChildWithPropNotUsing data={data} />
      <ChildWithNothing />
    </>
  );
};

export default Wrapper;

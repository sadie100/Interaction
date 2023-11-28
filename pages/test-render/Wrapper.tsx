import { useMemo, useState } from 'react';
import ChildWithProp from './ChildWithProp';
import ChildWithPropNotUsing from './ChildWithPropNotUsing';
import ChildWithNothing from './ChildWithNothing';
import ChildAcrossProp from './ChildAcrossProp';

const Wrapper = () => {
  const [constant, setConstant] = useState(0);
  const [data, setData] = useState({
    name: 'kim',
    age: 12
  });
  const handleData = () => {
    setData((data) => ({
      name: data.name + '1',
      age: data.age + 1
    }));
  };

  return (
    <>
      <button onClick={() => setConstant(3)}>콘스탄스를 변경한다.</button>
      <ChildWithNothing />
      <ChildAcrossProp data={data} handleData={handleData} constant={constant} />
      {/* <ChildWithProp data={data} />
      <ChildWithPropNotUsing data={data} /> */}
    </>
  );
};

export default Wrapper;

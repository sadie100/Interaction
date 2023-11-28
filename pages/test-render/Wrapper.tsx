import { useMemo, useState } from 'react';
import ChildWithData from './ChildWithData';
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
  const handleSameData = () => {
    setData((data) => ({
      name: 'kim',
      age: 12
    }));
  };

  const nothingHappens = () => {};

  return (
    <>
      <button onClick={() => setConstant((con) => con + 1)}>콘스탄스를 변경한다.</button>
      <ChildAcrossProp data={data} handleData={handleData} handleSameData={handleSameData} nothingHappens={nothingHappens} constant={constant} />
      <ChildWithNothing />
      {/* <ChildWithData data={data} />
      <ChildWithPropNotUsing data={data} /> */}
    </>
  );
};

export default Wrapper;

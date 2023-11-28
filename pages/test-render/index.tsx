import Wrapper from './Wrapper';

const TestRender = () => {
  return (
    <>
      <Wrapper />
      <div style={{ border: '1px solid red' }}>
        <label>나는 state 바깥의 div</label>
        <input type="text" />
      </div>
    </>
  );
};

export default TestRender;

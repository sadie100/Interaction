import { useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");
  return (
    <canvas ref={canvasRef} {...props}>
      물결 캔버스
    </canvas>
  );
};

export default Canvas;

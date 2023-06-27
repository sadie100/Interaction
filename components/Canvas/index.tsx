import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./canvas.module.scss";
import { Wave } from "@/pages/water/Wave";

const Canvas = (props: { children: ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [stageHeight, setStageHeight] = useState(0);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [wave, setWave] = useState<Wave>();

  const handleResize = () => {
    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;
    setStageWidth(stageWidth);
    setStageHeight(stageHeight);
    if (!!ctx) {
      ctx.scale(2, 2);
    }
    wave?.resize(stageWidth, stageHeight);
  };

  const handleAnimate = () => {
    if (!ctx || !wave) return;
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    wave.draw(ctx);
    requestAnimationFrame(handleAnimate);
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    console.log(canvas);
    if (!canvas) return;
    setCtx(canvas.getContext("2d"));

    setWave(new Wave());
    window.addEventListener("resize", handleResize, false);

    requestAnimationFrame(handleAnimate);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      style={{ width: stageWidth * 2, height: stageHeight * 2 }}
      {...props}
    ></canvas>
  );
};

export default Canvas;

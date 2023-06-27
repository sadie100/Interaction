import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styles from "./water.module.scss";
import Canvas from "@/components/Canvas";

const Home: NextPage = () => {
  return (
    <>
      <Canvas>물결 캔버스</Canvas>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";

interface WindowDimentionT {
  width: number;
  height: number;
}

function getWindowDimention(): WindowDimentionT {
  const { innerHeight, innerWidth } = window;
  return { width: innerWidth, height: innerHeight };
}

function useWindowDimention() {
  const [windowDimention, setWindowDimention] = useState<WindowDimentionT>(
    getWindowDimention()
  );

  const handleResize = () => setWindowDimention(getWindowDimention());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return { width: windowDimention.width, height: windowDimention.height };
}

export default useWindowDimention;

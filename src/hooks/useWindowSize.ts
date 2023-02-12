//@ts-nocheck
import { useEffect, useState } from "react";
interface WindowResizerProps {
  width: number | undefined;
  heigth: number | undefined;
}

export default function useWindowSize() {
  const Resizer: WindowResizerProps = {
    width: undefined,
    height: undefined,
  };
  const [windowSize, setWindowSize] = useState<WindowResizerProps>(Resizer);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

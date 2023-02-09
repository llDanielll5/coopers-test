import { useEffect, useState } from "react";

interface size {
  width: undefined | number;
  height: undefined | number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
  }, []);
  return windowSize;
};

export default useWindowSize;

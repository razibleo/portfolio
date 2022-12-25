import { useState, useEffect, MutableRefObject } from "react";

interface Dimensions {
  width: number;
}

const useContainerDimensions = (myRef: MutableRefObject<any>) => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};

export default useContainerDimensions;

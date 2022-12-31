import { useState, useEffect } from "react";
import Dimensions from "../../models/dimensions";

const getScreenDimensions = () => ({
  width: window.innerWidth,
});

const useScreenDimensions = () => {
  const [dimensions, setDimensions] = useState<Dimensions>(
    getScreenDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getScreenDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
};

export default useScreenDimensions;

const cacheImages = async (srcArray: string[]) => {
  const promises = srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  return Promise.all(promises);
};
export default cacheImages;

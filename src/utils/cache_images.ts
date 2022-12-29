type ItemsProgressFunction = (progress: number) => void;

const cacheImages = async (
  srcArray: string[],
  progressCallBack: ItemsProgressFunction
) => {
  let itemsCompleted: number = 0;
  const promises = srcArray.map((src) => {
    return new Promise(async (resolve, reject) => {
      // await sleep(Math.random() * 30000);

      const img = new Image();
      img.src = src;

      img.onload = resolve;
      img.onerror = reject;
    }).finally(() => {
      try {
        /// this could throw and error when you orgin is not https
        navigator.locks.request("myLock", async (lock) => {
          console.log("got lock", itemsCompleted);
          itemsCompleted++;
          progressCallBack(itemsCompleted / srcArray.length);
          console.log("released lock", itemsCompleted);
        });
      } catch (e) {}
    });
  });

  return Promise.all(promises);
};
export default cacheImages;

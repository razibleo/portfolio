import { useState, useEffect } from "react";

interface Props {
  offset?: number;
}

const useAtBottom = (props?: Props) => {
  const [isAtBottom, setIsAtBotom] = useState<boolean>(false);

  useEffect(() => {
    const getIsAtBottom = (e: HTMLElement) => {
      const atBottom =
        e.clientHeight + e.scrollTop >= e.scrollHeight - (props?.offset ?? 0);
      //   console.log(
      //     "e.scrollHeight ",
      //     e.scrollHeight,
      //     "e.scrollTop ",
      //     e.scrollTop,
      //     "e.clientHeight",
      //     e.clientHeight
      //   );
      return atBottom;
    };

    const onScroll = (e: any) => {
      //   console.log(e);
      setIsAtBotom(getIsAtBottom(document.documentElement));
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [props?.offset]);
  return isAtBottom;
};
export default useAtBottom;

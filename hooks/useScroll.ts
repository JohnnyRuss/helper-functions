/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";

interface ScrollOptionsT {
  top?: number;
  left?: number;
  behavior?: "smooth" | "auto";
}

interface UseScrollT {
  target: "window" | "element";
  scrollTo: string; // id of target
  options?: ScrollOptionsT;
}

export default function useScroll({
  options,
  scrollTo,
  target = "window",
}: UseScrollT) {
  const windowScrollOptions: ScrollOptionsT = useMemo(() => {
    const opt: ScrollOptionsT = {
      top: 0,
      left: 0,
      behavior: "auto",
    };

    return opt;
  }, []);

  const elementScrollOptions = useMemo(
    () => ({
      block: "center",
      behavior: "smooth",
    }),
    []
  );

  useEffect(() => {
    if (target === "window")
      return window.scrollTo({ ...windowScrollOptions, ...options });
    else if (target === "element")
      return document
        .getElementById(scrollTo)
        ?.scrollIntoView({ ...elementScrollOptions, ...options });
  }, []);
}

import { useCallback, useState } from "react";

export default function useAccordion() {
  const [activeIndex, setActiveIndex] = useState("0");

  const handleToggle = useCallback(
    (index) => {
      if (activeIndex === index) {
        return setActiveIndex("0");
      }
      setActiveIndex(index);
    },
    [activeIndex]
  );

  return [activeIndex, handleToggle];
}

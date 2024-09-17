import React from "react";
import IconPlus from "../icon/IconPlus";
import IconMinus from "../icon/IconMinus";

const AccordionItemButton = ({
  children,
  active,
  borderBottom = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="flex items-center justify-between w-full py-2 font-semibold text-left text-black"
      onClick={onClick}
    >
      <span className="flex items-center" itemProp="name">
        {children}
      </span>
      {active ? <IconMinus></IconMinus> : <IconPlus></IconPlus>}
    </button>
  );
};

export default AccordionItemButton;

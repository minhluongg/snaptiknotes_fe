import classNames from "@/hooks/classNames";
import React from "react";

const AccordionItemPanel = ({ children, active = false, borderBottom }) => {
  return (
    <div
      className={classNames(
        "grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ",
        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
      itemProp="acceptedAnswer"
      itemScope={true}
      itemType="https://schema.org/Answer"
    >
      <div className="overflow-hidden">
        <div className="pb-3" itemProp="text">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItemPanel;

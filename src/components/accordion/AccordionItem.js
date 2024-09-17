import React from "react";

const AccordionItem = ({ children }) => {
  return (
    <div
      className="py-2"
      itemProp="mainEntity"
      itemScope={true}
      itemType="https://schema.org/Question"
    >
      {children}
    </div>
  );
};

export default AccordionItem;

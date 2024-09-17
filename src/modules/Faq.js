import AccordionItem from "@/components/accordion/AccordionItem";
import AccordionItemButton from "@/components/accordion/AccordionItemButton";
import AccordionItemHeading from "@/components/accordion/AccordionItemHeading";
import AccordionItemPanel from "@/components/accordion/AccordionItemPanel";
import useAccordion from "@/hooks/useAccordion";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomeFaq = () => {
  const [activeIndex, handleToggle] = useAccordion();
  const { t: home } = useTranslation("home");

  return (
    <div
      className="divide-y faq divide-slate-200 faqs"
      id="faq"
      itemScope={true}
      itemType="https://schema.org/FAQPage"
    >
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(1)}
            active={activeIndex === 1}
          >
            {home("faqs.faq1.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 1}>
          {home("faqs.faq1.answer")}
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(2)}
            active={activeIndex === 2}
          >
            {home("faqs.faq2.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 2}>
          {home("faqs.faq2.answer")}
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(3)}
            active={activeIndex === 3}
          >
            {home("faqs.faq3.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 3}>
          <ul className="ol-decorated">
            <li className="mt-1">{home("faqs.faq3.answer.0")}</li>
            <li>{home("faqs.faq3.answer.1")}</li>
            <li>{home("faqs.faq3.answer.2")}</li>
            <li>{home("faqs.faq3.answer.3")}</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(4)}
            active={activeIndex === 4}
          >
            {home("faqs.faq4.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 4}>
          {home("faqs.faq4.answer")}
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(5)}
            active={activeIndex === 5}
          >
            {home("faqs.faq5.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 5}>
          {home("faqs.faq5.answer")}
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(6)}
            active={activeIndex === 6}
          >
            {home("faqs.faq6.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 6}>
          {home("faqs.faq6.answer")}
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={() => handleToggle(7)}
            active={activeIndex === 7}
            borderBottom={true}
          >
            {home("faqs.faq7.question")}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel active={activeIndex === 7} borderBottom={true}>
          {home("faqs.faq7.answer")}
        </AccordionItemPanel>
      </AccordionItem>
    </div>
  );
};

export default HomeFaq;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}

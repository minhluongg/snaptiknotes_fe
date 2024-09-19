import React from "react";
import Faq from "@/modules/Faq";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import IconOpenLink from "../icon/IconOpenLink";
import { useResult } from "@/contexts/resultContext";
import parse from "html-react-parser";

export default function HomeScreen() {
  const { t: home } = useTranslation("home");
  const { formResult } = useResult();
  return (
    <>
      {!formResult && !formResult?.items && (
        <>
          {" "}
          <div className="mt-8 text-center">
            <Link
              href="https://notes.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-1 py-1.5 px-2 mr-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            >
              <IconOpenLink></IconOpenLink> Open TikTok Notes
            </Link>
          </div>
          <div className="mt-8 content">
            <h2>{home("introducing.title")}</h2>
            <p>{parse(home("introducing.introducing1"))}</p>
            <p>{home("introducing.introducing2")}</p>

            <h2>{home("howto.title")}</h2>
            <p>{home("howto.subtitle")}</p>
            <p>{parse(home("howto.how1"))}</p>
            <p>{parse(home("howto.how2"))}</p>
            <p>{parse(home("howto.how3"))}</p>
            <p>{parse(home("howto.how4"))}</p>

            <h2>{home("features.title")}</h2>
            <p>{home("features.subtitle")}</p>
            <ul className="ol-decorated">
              <li>{parse(home("features.feature1"))}</li>
              <li>{parse(home("features.feature2"))}</li>
              <li>{parse(home("features.feature3"))}</li>
              <li>{parse(home("features.feature4"))}</li>
              <li>{parse(home("features.feature5"))}</li>
            </ul>

            <h2 className="mt-8">{home("faqTitle")}</h2>
            <Faq></Faq>
          </div>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}

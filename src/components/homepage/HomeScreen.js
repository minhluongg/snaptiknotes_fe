import React from "react";
import Faq from "@/modules/Faq";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import IconOpenLink from "../icon/IconOpenLink";
import { useResult } from "@/contexts/resultContext";

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
            <h2>{home("howto.title")}</h2>

            <b>{home("howto.how1")}</b>
            <p>{home("howto.how1Desc")}</p>
            <b>{home("howto.how2")}</b>
            <p>{home("howto.how2Desc")}</p>
            <b>{home("howto.how3")}</b>
            <p>{home("howto.how3Desc")}</p>

            <h2>{home("features.title")}</h2>
            <p>{home("features.desc")}</p>
            <h3>{home("features.feature1")}</h3>
            <p>{home("features.feature1_desc")}</p>
            <h3>{home("features.feature2")}</h3>
            <p>{home("features.feature2_desc")}</p>
            <h3>{home("features.feature3")}</h3>
            <p>{home("features.feature3_desc")}</p>
            <h3>{home("features.feature4")}</h3>
            <p>{home("features.feature4_desc")}</p>
            <h3>{home("features.feature5")}</h3>
            <p>{home("features.feature5_desc")}</p>
            <h3>{home("features.feature6")}</h3>
            <p>{home("features.feature6_desc")}</p>

            <h2>{home("faqTitle")}</h2>
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

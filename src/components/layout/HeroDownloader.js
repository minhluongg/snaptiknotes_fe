import React from "react";
import FormUrl from "./FormUrl";
import { useTranslation } from "next-i18next";
import { useResult } from "@/contexts/resultContext";

const HeroDownloader = () => {
  const { formResult } = useResult();
  const { t: home } = useTranslation("home");
  return (
    <>
      {!formResult && !formResult?.items && (
        <div className="mt-6 text-center hero md:mt-12">
          <h1 className="mb-2 text-2xl font-semibold">{home("h1")}</h1>
          <div className="text-sm text-gray-800">{home("subtitle")}</div>
          <FormUrl></FormUrl>
        </div>
      )}
    </>
  );
};

export default HeroDownloader;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}

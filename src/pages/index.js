import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LayoutMain from "@/components/layout/LayoutMain";
import HeroDownloader from "@/components/layout/HeroDownloader";
import HomeScreen from "@/components/homepage/HomeScreen";
import ShowResult from "@/components/layout/ShowResult";

export default function Home() {
  const { t } = useTranslation("common");
  const { t: home } = useTranslation("home");
  return (
    <LayoutMain
      meta={{
        title: home("title"),
        description: home("description"),
      }}
    >
      <HeroDownloader></HeroDownloader>
      <ShowResult></ShowResult>
      <HomeScreen></HomeScreen>
    </LayoutMain>
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

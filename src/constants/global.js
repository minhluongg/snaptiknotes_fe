// import IconFlagIn from "@/components/icon/flags/IconFlagIn";
import dynamic from "next/dynamic";
const IconFlagAr = dynamic(() => import("@/components/icon/flags/IconFlagAr"));
const IconFlagCn = dynamic(() => import("@/components/icon/flags/IconFlagCn"));
const IconFlagCs = dynamic(() => import("@/components/icon/flags/IconFlagCs"));
const IconFlagDe = dynamic(() => import("@/components/icon/flags/IconFlagDe"));
const IconFLagEs = dynamic(() => import("@/components/icon/flags/IconFLagEs"));
const IconFlagFr = dynamic(() => import("@/components/icon/flags/IconFlagFr"));
const IconFlagHu = dynamic(() => import("@/components/icon/flags/IconFlagHu"));
const IconFlagId = dynamic(() => import("@/components/icon/flags/IconFlagId"));
const IconFlagIt = dynamic(() => import("@/components/icon/flags/IconFlagIt"));
const IconFlagJa = dynamic(() => import("@/components/icon/flags/IconFlagJa"));
const IconFlagKo = dynamic(() => import("@/components/icon/flags/IconFlagKo"));
const IconFlagMs = dynamic(() => import("@/components/icon/flags/IconFlagMs"));
const IconFlagNl = dynamic(() => import("@/components/icon/flags/IconFlagNl"));
const IconFlagPl = dynamic(() => import("@/components/icon/flags/IconFlagPl"));
const IconFlagPt = dynamic(() => import("@/components/icon/flags/IconFlagPt"));
const IconFlagRu = dynamic(() => import("@/components/icon/flags/IconFlagRu"));
const IconFlagTh = dynamic(() => import("@/components/icon/flags/IconFlagTh"));
const IconFlagUs = dynamic(() => import("@/components/icon/flags/IconFlagUs"));
const IconFlagVN = dynamic(() => import("@/components/icon/flags/IconFlagVN"));
const IconFlagIn = dynamic(() => import("@/components/icon/flags/IconFlagIn"));

export const globalConfig = {
  thumbnailUrl: "/img/thumbnail.jpg",
  metaSiteName: "BubbleClassic.Com",
  siteLink: "https://bubbleclassic.com/",
  favicon: "/bubbleclassic-favicon.png",
};

export const GA_MEASUREMENT_ID = "G-VTJZQ99LRT";

// import IconFLagEs from "./IconFLagEs";

export const localesList = [
  {
    id: 1,
    name: "English",
    code: "en",
    flag: <IconFlagUs />,
  },
  {
    id: 2,
    name: "Việt Nam",
    code: "vi",
    flag: <IconFlagVN />,
  },
  {
    id: 3,
    name: "Indonesia",
    code: "id",
    flag: <IconFlagId />,
  },
  {
    id: 4,
    name: "Arabic",
    code: "ar",
    flag: <IconFlagAr />,
  },
  {
    id: 5,
    name: "Czech",
    code: "cs",
    flag: <IconFlagCs />,
  },
  {
    id: 6,
    name: "German",
    code: "de",
    flag: <IconFlagDe />,
  },
  {
    id: 7,
    name: "Spanish",
    code: "es",
    flag: <IconFLagEs />,
  },
  {
    id: 8,
    name: "French",
    code: "fr",
    flag: <IconFlagFr />,
  },
  {
    id: 20,
    name: "Hindi",
    code: "hi",
    flag: <IconFlagIn />,
  },
  {
    id: 9,
    name: "Hungarian",
    code: "hu",
    flag: <IconFlagHu />,
  },
  {
    id: 10,
    name: "Italian",
    code: "it",
    flag: <IconFlagIt />,
  },
  {
    id: 11,
    name: "Japanese",
    code: "ja",
    flag: <IconFlagJa />,
  },
  {
    id: 12,
    name: "Korean",
    code: "ko",
    flag: <IconFlagKo />,
  },
  {
    id: 13,
    name: "Malay",
    code: "ms",
    flag: <IconFlagMs />,
  },
  {
    id: 14,
    name: "Dutch",
    code: "nl",
    flag: <IconFlagNl />,
  },
  {
    id: 15,
    name: "Polish",
    code: "pl",
    flag: <IconFlagPl />,
  },
  {
    id: 16,
    name: "Portuguese",
    code: "pt",
    flag: <IconFlagPt />,
  },
  {
    id: 17,
    name: "Russian",
    code: "ru",
    flag: <IconFlagRu />,
  },
  {
    id: 18,
    name: "Thai",
    code: "th",
    flag: <IconFlagTh />,
  },
  {
    id: 19,
    name: "Chinese",
    code: "zh",
    flag: <IconFlagCn />,
  },
];

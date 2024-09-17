import { useRouter } from "next/router";
import React from "react";

const SchemaSite = () => {
  const router = useRouter();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebPage",
          "@id": `https://threads.snapsave.app${
            router.locale === "en" ? "" : `/${router.locale}`
          }`,
          url: `https://threads.snapsave.app${
            router.locale === "en" ? "" : `/${router.locale}`
          }`,
          inLanguage: router.locale,
          name: "Threads Video Downloader",
          description:
            "Free download Threads videos in high quality, fast speed and. Save videos as MP4 files directly to your device with the best Threads downloader",
          mainEntity: {
            "@type": "WebApplication",
            name: "Threads Video Downloader",
            "@id": "https://threads.snapsave.app/#app",
            operatingSystem: "Windows, Linux, iOS, Android, OSX, macOS",
            applicationCategory: "UtilitiesApplication",
            featureList: ["Download Threads Videos"],
            offers: {
              "@type": "Offer",
              price: "0",
            },
          },
        }),
      }}
    />
  );
};

export default SchemaSite;

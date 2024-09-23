import React from "react";
import { Inter } from "next/font/google";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { ResultProvider } from "@/contexts/resultContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { localesList } from "@/constants/global";
import Script from "next/script";

const inter = Inter({
  weights: [400, 500, 600, 700],
  display: "swap",
  fontDisplay: "swap",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

const LayoutMain = ({ children, customMeta, meta }) => {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{meta?.title || "TikTok Notes Downloader | TikNotes.App"}</title>
        <meta
          name="description"
          content={
            meta?.description || "TikTok Notes Downloader | TikNotes.App"
          }
        />
        <meta name="revisit-after" content="1 days" />
        <meta
          itemProp="name"
          content={meta?.title || "TikTok Notes Downloader | TikNotes.App"}
        />
        <meta name="author" content="SnapSave" />
        <meta itemProp="image" content="/preview.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={meta?.title || "TikTok Notes Downloader | TikNotes.App"}
        />
        <meta
          name="twitter:description"
          content={
            meta?.description || "TikTok Notes Downloader | TikNotes.App"
          }
        />
        <meta name="twitter:image:src" content="/preview.jpg" />
        <meta
          property="og:title"
          content={meta?.title || "TikTok Notes Downloader | TikNotes.App"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            meta?.description || "TikTok Notes Downloader | TikNotes.App"
          }
        />
        <meta
          property="og:site_name"
          content={meta?.title || "TikTok Notes Downloader | TikNotes.App"}
        />
        <link rel="shortcut icon" href="/logo/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-icon-180x180.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
        <meta property="og:image" content="/preview.jpg" />
        <link
          rel="alternate"
          href={`https://tiknotes.app${router.route}`}
          {...{ hrefLang: "x-default" }}
        />
        <link
          rel="alternate"
          href={`https://tiknotes.app${router.route}`}
          {...{ hrefLang: "en" }}
        />
        {localesList.slice(1).map((item) => (
          <link
            rel="alternate"
            key={`${item.code}_alternate`}
            href={`https://tiknotes.app/${item.code}`}
            {...{ hrefLang: item.code }}
          />
        ))}

        <link
          rel="canonical"
          href={`https://tiknotes.app${
            router.locale === "en" ? "" : `/${router.locale}`
          }${router.route == "/" ? "" : router.route}`}
        />
        {customMeta}
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
      <ResultProvider>
        <div
          className={inter.className}
          dir={router.locale === "ar" ? "rtl" : undefined}
        >
          <Topbar></Topbar>
          <main className="container">{children}</main>
          <Footer></Footer>
        </div>
      </ResultProvider>
    </>
  );
};

export default LayoutMain;

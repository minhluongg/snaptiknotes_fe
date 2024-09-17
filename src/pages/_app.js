import "@/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color="#256af0" options={{ easing: "ease", speed: 500 }} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};
export default appWithTranslation(App);

const useGAEvent = () => {
  return {
    pageview: (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    },
    event: ({ action, params = {} }) => {
      window.gtag("event", action, { ...params });
    },
  };
};

export default useGAEvent;

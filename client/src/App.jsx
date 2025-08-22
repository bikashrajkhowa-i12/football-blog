import React from "react";

import { useLoader } from "./context/LoaderContext";

import { useScreenVH } from "./hooks/useScreenVH";
import GlobalLoader from "./components/GlobalLoader";
import AppRedirect from "./AppRedirect";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useScreenVH();
  const { type = "global", prompt = "", loading = false } = useLoader();

  return (
    <div className="min-h-[calc(var(--vh)*100)] flex flex-col">
      {type === "global" && <GlobalLoader loading={loading} prompt={prompt} />}
      <ScrollToTop />
      <AppRedirect />
    </div>
  );
};

export default App;

import React from "react";

import { useLoader } from "./context/LoaderContext";

import { useScreenVH } from "./hooks/useScreenVH";
import GlobalLoader from "./components/GlobalLoader";
import AppRedirect from "./AppRedirect";

const App = () => {
  useScreenVH(); // set the view port height dynamically based on actually screen-vh
  const { type = "global", prompt = "", loading = false } = useLoader();

  return (
    <div className="min-h-[calc(var(--vh)*100)] flex flex-col">
      {type === "global" && <GlobalLoader loading={loading} prompt={prompt} />}
      <AppRedirect />
    </div>
  );
};

export default App;

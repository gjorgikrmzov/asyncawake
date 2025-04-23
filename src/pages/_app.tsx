import AssistantBot from "@/components/assistant-bot";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { memo } from "react";

const App = memo(({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <AssistantBot />
    </>
  );
});

App.displayName = "App";

export default App;
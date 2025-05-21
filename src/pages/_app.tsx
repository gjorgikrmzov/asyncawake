import AssistantBot from "@/components/assistant-bot";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { memo } from "react";
import useLenis from "@/components/useLenis";
import CustomCursor from "@/components/cursor";

const App = memo(({ Component, pageProps }: AppProps) => {
  useLenis();
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
      <AssistantBot />
    </>
  );
});

App.displayName = "App";

export default App;

import AssistantBot from "@/components/assistant-bot";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { memo } from "react";
import useLenis from "@/components/useLenis";
import { usePathname } from "next/navigation";

const App = memo(({ Component, pageProps }: AppProps) => {
  const pathname = usePathname();

  console.log(pathname)
  useLenis();
  return (
    <>
      <Component {...pageProps} />

      {pathname !== "/apply/" && <AssistantBot />}
    </>
  );
});

App.displayName = "App";

export default App;

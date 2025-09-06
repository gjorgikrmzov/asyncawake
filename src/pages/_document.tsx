import { Head, Html, Main, NextScript } from "next/document";

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice?: { url: string };
          assistant?: { color: string; stylesheet: string };
        }) => void;
      };
    };
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

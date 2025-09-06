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
      <Head>
        <title>Async Awake</title>
                  <meta
            name="description"
            content="Async Awake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
          />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

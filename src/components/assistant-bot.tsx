"use client";

import { useEffect } from "react";

const AssistantBot: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "68021a630d7a6d3cd0525204" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default AssistantBot;

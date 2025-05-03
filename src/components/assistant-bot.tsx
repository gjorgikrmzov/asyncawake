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
        verify: { projectID: "68111de2c45b0a1bf44d694c" },
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

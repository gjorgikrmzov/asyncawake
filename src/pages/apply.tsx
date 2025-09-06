import { useEffect } from "react";

declare global {
  interface Window {
    formsapp: any;
  }
}

const Apply = () => {
  useEffect(() => {
    // Create the forms.app embed div dynamically
    const container = document.createElement("div");
    container.setAttribute("formsappId", "68507140dd9ab40002e50f2c");
    document.body.appendChild(container);

    // Create and append the forms.app embed script
    const script = document.createElement("script");
    script.src = "https://forms.app/cdn/embed.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Initialize the formsapp embed after script loads
      new window.formsapp(
        "68507140dd9ab40002e50f2c",
        "fullscreen",
        {},
        "https://g5x7l8bf.forms.app"
      );
    };
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(container);
    };
  }, []);

  return (
    <div
      style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0 }}
    >
      {/* The form embed will be inserted dynamically */}
    </div>
  );
};

export default Apply;

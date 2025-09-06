import { cn } from "../../src/utils/cn";
import type { ComponentProps, ReactNode } from "react";

const ShinyText = ({
  children,
  speedInMs = 5000,
  className,
  ...props
}: {
  children: ReactNode;
  speedInMs?: number;
} & ComponentProps<"div">) => {
  return (
    <>
      <style>
        {`
        @keyframes shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        `}
      </style>
      <div
        className={cn(
          "inline-block bg-clip-text text-transparent",
          className,
        )}
        style={{
          backgroundImage:
            "linear-gradient(120deg, #292929 40%, white 50%, #292929 60%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          animation: `shine ${speedInMs}ms linear infinite`,
        }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default ShinyText;

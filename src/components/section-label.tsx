import { Flash } from "iconsax-react";
import { memo } from "react";

type IconType = typeof Flash;

// Reusable SectionLabel component
interface SectionLabelProps {
  text: string;
  icon: IconType;
}

export const SectionLabel: React.FC<SectionLabelProps> = memo(
  ({ text, icon: Icon }) => (
    <div className="backdrop-blur-2xl relative  overflow-hidden flex gap-x-2 items-center bg-[#5E27F6]/10 to-transparent px-3 md:px-4 py-1 md:py-1.5 rounded-full">
      <p className="text-[#5E27F6] font-medium">{text}</p>
      <Icon
        variant="Bulk"
        size={18}
        className="relative bottom-[1px]"
        color="#5E27F6"
      />
    </div>
  )
);
SectionLabel.displayName = "SectionLabel";

"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { Add, ArrowDown2, Minus } from "iconsax-react";
import { cn } from "@/lib/utils";

type AccordionContextType = {
  openItem: string | undefined;
};

const AccordionContext = React.createContext<AccordionContextType>({
  openItem: undefined,
});

const Accordion = ({
  children,
  ...props
}: AccordionPrimitive.AccordionSingleProps) => {
  const [openItem, setOpenItem] = React.useState<string | undefined>(
    props.defaultValue?.toString()
  );

  return (
    <AccordionContext.Provider value={{ openItem }}>
      <AccordionPrimitive.Root
        {...props}
        type="single"
        collapsible
        onValueChange={(value) => setOpenItem(value)}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, value, children, ...props }, ref) => {
  const { openItem } = React.useContext(AccordionContext);
  const isOpen = openItem === value;

  // Inject `isOpen` into children that accept it
  const enhancedChildren = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, { isOpen })
      : child
  );

  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={value}
      className={cn("bg-[#F8F8F8]  px-6 my-4 transition-all hover:bg-[#F8F8F8]/90  rounded-3xl ", className)}
      {...props}
    >
      {enhancedChildren}
    </AccordionPrimitive.Item>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    isOpen?: boolean;
  }
>(({ className, children, isOpen, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between text-sm font-medium  text-left",
        isOpen && "[&>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}

      <div className="w-fit">
        {isOpen ? (
          <Minus color="#000" variant="Linear" size={24} />
        ) : (
          <Add color="#000" variant="Linear" size={24} />
        )}
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    isOpen?: boolean;
  }
>(({ className, children, isOpen, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden"
      {...props}
    >
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.4, type: "spring" }}
            className={cn("text-sm", className)}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-4 pt-0 text-black/80" >{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

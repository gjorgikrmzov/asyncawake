"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { Add, AddCircle, ArrowDown2, Minus, MinusCirlce } from "iconsax-react";
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
      className={cn(
        "bg-[#f8f8f8]  px-6 my-2 transition-all hover:bg-[#f8f8f8]/90  rounded-3xl ",
        className
      )}
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

      <div className=" hidden  w-10 h-10 ml-2 rounded-full md:flex justify-center items-center bg-[#000]">
        {isOpen ? (
          <Minus variant="Linear" color="#EFEFEF" size={24} />
        ) : (
          <Add variant="Linear" color="#EFEFEF" size={24} />
        )}
      </div>

      <div className="flex md:hidden ml-4">
        {isOpen ? (
          <MinusCirlce variant="Bold" color="#000" size={30} />
        ) : (
          <AddCircle variant="Bold" color="#000" size={30} />
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
            <div className="pb-4 pt-0 text-black/70">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

import * as React from "react";
import { cn } from "@/lib/utils";

// Lightweight tooltip primitives to avoid Radix/React duplication issues
// API-compatible with our previous exports used across the app

type ProviderProps = { children: React.ReactNode; delayDuration?: number };
const TooltipProvider: React.FC<ProviderProps> = ({ children }) => <>{children}</>;

const Tooltip: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn("relative inline-block group", className)} {...props}>
    {children}
  </div>
);

const TooltipTrigger = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { asChild?: boolean }>(
  ({ asChild = false, children, className, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return <>{children}</>;
    }
    return (
      <span ref={ref} className={className} {...props}>
        {children}
      </span>
    );
  },
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { side?: "top" | "right" | "bottom" | "left"; align?: "start" | "center" | "end"; hidden?: boolean }
>(({ className, hidden, children, ...props }, ref) => (
  <div
    ref={ref}
    role="tooltip"
    className={cn(
      "absolute z-50 hidden group-hover:block px-3 py-1.5 text-sm rounded-md border bg-popover text-popover-foreground shadow-md",
      // Default position similar to sidebar tooltips
      "left-full top-1/2 -translate-y-1/2 ml-2",
      hidden ? "hidden" : "",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

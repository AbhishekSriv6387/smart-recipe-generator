import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base = "btn";
    const variants = {
      primary: "btn-primary",
      ghost: "btn hover:bg-gray-100 dark:hover:bg-neutral-800",
      outline: "btn border border-gray-300 hover:bg-gray-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
    } as const;
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";

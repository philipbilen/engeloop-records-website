// src/app/components/ui/Button.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  asChild?: boolean; // For using with Link or other components
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      icon: Icon,
      iconPosition = "left",
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Base styles
    let baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    // Variant styles (Tailwind)
    const variantClasses = {
      primary: "bg-engeloop-orange text-white hover:bg-engeloop-orange/90",
      secondary:
        "bg-engeloop-charcoal text-white hover:bg-engeloop-charcoal/90",
      outline:
        "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };

    // Size styles
    const sizeClasses = {
      sm: "h-9 px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-base",
      icon: "h-10 w-10",
    };

    // Loading spinner (example)
    const spinner = (
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
    );

    const Comp = asChild ? "span" : "button"; // Or use Slot from @radix-ui/react-slot

    return (
      <Comp
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && spinner}
        {!isLoading && Icon && iconPosition === "left" && (
          <Icon className="mr-2 h-4 w-4" />
        )}
        {!isLoading && children}
        {!isLoading && Icon && iconPosition === "right" && (
          <Icon className="ml-2 h-4 w-4" />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";
export { Button };

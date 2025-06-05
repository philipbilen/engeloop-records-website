// src/app/components/ui/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export { Input };

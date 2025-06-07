// src/app/components/StandardFooter.tsx

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";

interface StandardFooterProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundColor?: "white" | "gray" | "cream";
  theme?: "light" | "dark";
  compact?: boolean;
  className?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  buttonSize?: "sm" | "md" | "lg";
}

export default function StandardFooter({
  title,
  description,
  buttonText,
  buttonHref,
  backgroundColor = "gray",
  theme = "light",
  compact = false,
  className = "",
  buttonVariant = "primary",
  buttonSize = "lg",
}: StandardFooterProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-b from-white to-gray-50",
    cream: "bg-engeloop-cream/30",
  };

  const themeClasses = {
    light: {
      title: "text-gray-800",
      description: "text-gray-600",
    },
    dark: {
      title: "text-white",
      description: "text-gray-300",
    },
  };

  const spacingClasses = compact ? "py-12" : "py-16";
  const descriptionSpacing = compact ? "mb-8" : "mb-10";

  return (
    <section
      className={`${spacingClasses} ${backgroundClasses[backgroundColor]} text-center ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`text-section-refined ${themeClasses[theme].title} mb-4`}
        >
          {title}
        </h2>
        <p
          className={`text-body-refined ${themeClasses[theme].description} ${descriptionSpacing} max-w-2xl mx-auto`}
        >
          {description}
        </p>
        <Link href={buttonHref} className="inline-block">
          <Button
            variant={buttonVariant}
            size={buttonSize}
            className="tracking-wide uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-engeloop"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}

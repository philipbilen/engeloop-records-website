// src/app/components/StandardHero.tsx

import React from "react";

interface StandardHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: "white" | "gray" | "gradient";
  textColor?: "dark" | "light";
  children?: React.ReactNode;
  backgroundPosition?: string; // <--- New prop
}

export default function StandardHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = "gradient",
  textColor = "dark",
  children,
  backgroundPosition = "center", // Default to 'center' if not provided
}: StandardHeroProps) {
  const sectionClasses = backgroundImage
    ? "pt-0 pb-20 min-h-[60vh] flex items-center justify-center" // Consider adjusting min-h if needed for positioning
    : "pt-32 pb-16";

  const contentPaddingTop = backgroundImage ? "pt-32" : "";

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-b from-white to-gray-50",
    cream: "bg-engeloop-cream/30",
  };

  const textClasses = {
    dark: {
      title: "text-gray-900",
      subtitle: "text-gray-600",
      description: "text-gray-500",
    },
    light: {
      title: "text-white",
      subtitle: "text-white/90",
      description: "text-white/80",
    },
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition, // <--- Use the prop here
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={`${sectionClasses} px-4 ${
        backgroundImage ? "" : backgroundClasses[backgroundColor]
      } relative`}
      style={backgroundStyle}
    >
      <div
        className={`max-w-6xl mx-auto text-center relative z-10 ${contentPaddingTop}`}
      >
        <h1 className="text-hero-primary text-white mb-6 text-shadow-hero">
          {title}
        </h1>

        {subtitle && (
          <p className="text-hero-subtitle text-white/90 max-w-3xl mx-auto mb-4 text-shadow-subtle">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p
            className={`text-large font-inter ${textClasses[textColor].description} max-w-4xl mx-auto leading-relaxed`}
          >
            {description}
          </p>
        )}

        {/* Custom children content */}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

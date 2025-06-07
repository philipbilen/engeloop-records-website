// src/app/components/StandardHero.tsx

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";

interface StandardHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: "white" | "gray" | "gradient";
  textColor?: "dark" | "light";
  children?: React.ReactNode;
  backgroundPosition?: string;

  // NEW: CTA Support
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "outline";

  // NEW: Typography Flexibility
  titleStyle?: "default" | "refined" | "custom";
  customTitleClasses?: string;
  customSubtitleClasses?: string;
}

export default function StandardHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = "gradient",
  textColor = "dark",
  children,
  backgroundPosition = "center",

  // CTA props
  showCTA = false,
  ctaText = "Learn More",
  ctaHref = "#",
  ctaVariant = "primary",

  // Typography props
  titleStyle = "default",
  customTitleClasses,
  customSubtitleClasses,
}: StandardHeroProps) {
  const sectionClasses = backgroundImage
    ? "pt-0 pb-20 min-h-[60vh] flex items-center justify-center"
    : "pt-32 pb-16";

  const contentPaddingTop = backgroundImage ? "pt-32" : "";

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-b from-white to-gray-50",
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

  // Typography styles
  const titleStyles = {
    default: `text-section-title font-work-sans font-bold`,
    refined: `text-hero-primary`, // Uses our new typography classes
    custom: customTitleClasses || `text-section-title font-work-sans font-bold`,
  };

  const subtitleStyles = {
    default: `text-xl font-inter font-medium`,
    refined: `text-hero-subtitle`, // Uses our new typography classes
    custom: customSubtitleClasses || `text-xl font-inter font-medium`,
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
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
        {/* Main Title */}
        <h1
          className={`${titleStyles[titleStyle]} ${
            textClasses[textColor].title
          } mb-4 tracking-tight ${
            backgroundImage && textColor === "light" ? "text-shadow-hero" : ""
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`${subtitleStyles[titleStyle]} ${
              textClasses[textColor].subtitle
            } max-w-3xl mx-auto mb-4 ${
              backgroundImage && textColor === "light"
                ? "text-shadow-subtle"
                : ""
            }`}
          >
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p
            className={`text-large font-inter ${textClasses[textColor].description} max-w-4xl mx-auto leading-relaxed mb-6`}
          >
            {description}
          </p>
        )}

        {/* CTA Button */}
        {showCTA && ctaHref && (
          <div className="mt-8">
            <Link href={ctaHref} className="inline-block">
              <Button
                variant={ctaVariant}
                size="lg"
                className="tracking-wide uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-engeloop"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        )}

        {/* Custom children content */}
        {children && <div className="mt-6">{children}</div>}
      </div>

      {/* Decorative wave for background images - removed as per feedback */}
    </section>
  );
}

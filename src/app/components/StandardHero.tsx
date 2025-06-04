import React from "react";

interface StandardHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: "white" | "gray" | "gradient";
  textColor?: "dark" | "light";
  children?: React.ReactNode;
}

export default function StandardHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = "gradient",
  textColor = "dark",
  children,
}: StandardHeroProps) {
  // For background images, we want to start from absolute top and add content padding
  // For solid backgrounds, use normal spacing
  const sectionClasses = backgroundImage
    ? "pt-0 pb-20 min-h-[60vh] flex items-center justify-center"
    : "pt-32 pb-16";

  const contentPaddingTop = backgroundImage ? "pt-32" : ""; // Add top padding to content when bg image starts from top

  // Background classes
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-b from-white to-gray-50",
  };

  // Text color classes
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
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          className={`text-section-title font-work-sans font-bold ${textClasses[textColor].title} mb-4 tracking-tight`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`text-xl font-inter font-medium ${textClasses[textColor].subtitle} max-w-3xl mx-auto mb-4`}
          >
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

      {/* Decorative wave for background images */}
      {backgroundImage && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 text-white">
            <path
              fill="currentColor"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      )}
    </section>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        engeloop: {
          orange: "#C04E27",
          cream: "#FBE7B2",
          charcoal: "#333333",
          beige: "#F5E9DC",
          highlight: "#E35BA5",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(3.5rem, 10vw, 5rem)",
        nav: "clamp(2.5rem, 8vw, 3.5rem)",
        "section-title": "clamp(2.5rem, 6vw, 3.5rem)",
        display: "clamp(2rem, 5vw, 2.75rem)", // NEW: For refined section headers
        headline: "clamp(1.5rem, 3vw, 2rem)", // NEW: For subsection titles
        large: "1.375rem", // 22px
        body: "1rem", // NEW: Standard body text
        caption: "0.875rem", // NEW: Small descriptive text
      },
      fontWeight: {
        // Add more nuanced weights
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      letterSpacing: {
        // Add more refined tracking options
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        "extra-wide": "0.15em", // NEW: For spaced-out headings
      },
      lineHeight: {
        // Add more specific line heights
        tight: "1.1",
        snug: "1.3",
        normal: "1.5",
        relaxed: "1.6",
        loose: "1.8",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.15)",
        engeloop: "0 4px 12px rgba(192, 78, 39, 0.3)",
        // NEW: Subtle text shadows for overlays
        "text-light": "0 1px 3px rgba(0, 0, 0, 0.3)",
        "text-strong": "0 2px 6px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [
    // Custom typography component classes
    function ({ addComponents, theme }) {
      addComponents({
        // Hero Typography
        ".text-hero-primary": {
          fontFamily: theme("fontFamily.work-sans"),
          fontSize: theme("fontSize.hero"),
          fontWeight: theme("fontWeight.semibold"), // Lighter than bold
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.tight"),
          textTransform: "uppercase",
        },
        ".text-hero-subtitle": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.normal"), // Much lighter
          letterSpacing: theme("letterSpacing.normal"),
          lineHeight: theme("lineHeight.relaxed"),
        },

        // Section Headers (for footer, etc.)
        ".text-section-refined": {
          fontFamily: theme("fontFamily.work-sans"),
          fontSize: theme("fontSize.display"),
          fontWeight: theme("fontWeight.medium"), // Much lighter than bold
          letterSpacing: theme("letterSpacing.wider"),
          lineHeight: theme("lineHeight.snug"),
          textTransform: "uppercase",
        },

        // Body Text Variants
        ".text-body-refined": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.large"),
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: theme("letterSpacing.normal"),
          lineHeight: theme("lineHeight.relaxed"),
        },
        ".text-caption-refined": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.caption"),
          fontWeight: theme("fontWeight.normal"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.normal"),
        },

        // Text Shadow Utilities
        ".text-shadow-hero": {
          textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
        },
        ".text-shadow-subtle": {
          textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        },
      });
    },
  ],
};

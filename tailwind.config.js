const animate = require("tailwindcss-animate");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
        hover: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        "hover-shadow": {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
        hover: "hover 2s ease-in-out infinite",
        "hover-shadow": "hover-shadow 2s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            "h1, h2, h3, h4, h5, h6": {
              "a:not([href^=http])": {
                color: colors.inherit,
                "font-weight": defaultTheme.fontWeight.bold,
                "text-decoration": "none",
                "&::before": {
                  content: '"# "',
                  "font-weight": defaultTheme.fontWeight.normal,
                  opacity: defaultTheme.opacity[50],
                },
              },
            },
            a: {
              "font-weight": "inherit",
              color: colors.indigo[600],
            },
            'iframe[src^="https://www.youtube.com"]': {
              width: "100% !important",
              height: "auto !important",
              "aspect-ratio": defaultTheme.aspectRatio.video,
              "border-radius": defaultTheme.borderRadius.md,
              "box-shadow": defaultTheme.boxShadow.lg,
            },
            pre: {
              padding: 0,
            },
          },
        },
      },
    },
  },
  plugins: [animate, require("@tailwindcss/typography")],
};

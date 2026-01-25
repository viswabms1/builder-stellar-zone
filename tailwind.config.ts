import type { Config } from "tailwindcss";

const brandMagenta = "var(--brand-magenta)";
const brandOrange = "var(--brand-orange)";
const brandBlue = "var(--brand-blue)";
const brandOffWhite = "var(--brand-off-white)";

const makeBrandScale = (variable: string) => ({
  50: `hsl(${variable} / 0.08)`,
  100: `hsl(${variable} / 0.12)`,
  200: `hsl(${variable} / 0.2)`,
  300: `hsl(${variable} / 0.35)`,
  400: `hsl(${variable} / 0.6)`,
  500: `hsl(${variable})`,
  600: `hsl(${variable})`,
  700: `hsl(${variable})`,
  800: `hsl(${variable})`,
  900: `hsl(${variable})`,
  950: `hsl(${variable})`,
});

const makeNeutralScale = () => ({
  50: "hsl(var(--foreground) / 0.05)",
  100: "hsl(var(--foreground) / 0.08)",
  200: "hsl(var(--foreground) / 0.12)",
  300: "hsl(var(--foreground) / 0.2)",
  400: "hsl(var(--foreground) / 0.4)",
  500: "hsl(var(--foreground) / 0.6)",
  600: "hsl(var(--foreground) / 0.75)",
  700: "hsl(var(--foreground) / 0.9)",
  800: "hsl(var(--foreground))",
  900: "hsl(var(--foreground))",
  950: "hsl(var(--foreground))",
});

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.8125rem", { lineHeight: "1.25rem" }],
      base: ["0.9375rem", { lineHeight: "1.5rem" }],
      lg: ["1rem", { lineHeight: "1.75rem" }],
      xl: ["1.125rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.25rem", { lineHeight: "1.75rem" }],
      "3xl": ["1.5rem", { lineHeight: "2rem" }],
      "4xl": ["1.75rem", { lineHeight: "2.25rem" }],
      "5xl": ["2rem", { lineHeight: "2.5rem" }],
      "6xl": ["2.5rem", { lineHeight: "3rem" }],
      "7xl": ["3rem", { lineHeight: "3.5rem" }],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
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
      sidebar: {
        DEFAULT: "hsl(var(--sidebar-background))",
        foreground: "hsl(var(--sidebar-foreground))",
        primary: "hsl(var(--sidebar-primary))",
        "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        accent: "hsl(var(--sidebar-accent))",
        "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        border: "hsl(var(--sidebar-border))",
        ring: "hsl(var(--sidebar-ring))",
      },
      // DSU Brand Colors
      brand: {
        magenta: `hsl(${brandMagenta})`,
        orange: `hsl(${brandOrange})`,
        "off-white": `hsl(${brandOffWhite})`,
        blue: `hsl(${brandBlue})`,
        yellow: `hsl(${brandOrange})`,
        gray: `hsl(${brandBlue})`,
      },
      // Map all color families to brand palette
      blue: makeBrandScale(brandBlue),
      indigo: makeBrandScale(brandBlue),
      cyan: makeBrandScale(brandBlue),
      teal: makeBrandScale(brandBlue),
      green: makeBrandScale(brandBlue),
      emerald: makeBrandScale(brandBlue),
      sky: makeBrandScale(brandBlue),
      slate: makeNeutralScale(),
      gray: makeNeutralScale(),
      zinc: makeNeutralScale(),
      neutral: makeNeutralScale(),
      stone: makeNeutralScale(),
      orange: makeBrandScale(brandOrange),
      amber: makeBrandScale(brandOrange),
      yellow: makeBrandScale(brandOrange),
      red: makeBrandScale(brandOrange),
      rose: makeBrandScale(brandOrange),
      purple: makeBrandScale(brandMagenta),
      violet: makeBrandScale(brandMagenta),
      fuchsia: makeBrandScale(brandMagenta),
      pink: makeBrandScale(brandMagenta),
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "glow-pulse": {
          "0%": {
            "box-shadow": "0 0 5px hsl(var(--neon-purple)), 0 0 10px hsl(var(--neon-purple)), 0 0 15px hsl(var(--neon-purple))",
          },
          "100%": {
            "box-shadow": "0 0 10px hsl(var(--neon-purple)), 0 0 20px hsl(var(--neon-purple)), 0 0 30px hsl(var(--neon-purple))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
      },
      fontFamily: {
        display: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "Poppins", "sans-serif"],
        sans: ["Inter", "Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, hsl(var(--brand-magenta)), hsl(var(--brand-orange)))",
        "brand-gradient-alt": "linear-gradient(135deg, hsl(var(--brand-blue)), hsl(var(--brand-magenta)))",
        "brand-gradient-warm": "linear-gradient(45deg, hsl(var(--brand-orange)), hsl(var(--brand-yellow)))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const themes = {
  dark: {
    "--color-black": "#000000",
    "--color-dark": "#050505",
    "--color-white": "#ffffff",
    "--color-gray": "#888888",
    "--color-accent": "#00f2ff",
    "--glass-bg": "rgba(0, 0, 0, 0.5)",
  },
  darkBlue: {
    "--color-black": "#0B1120" /* Deep Navy (Main Background) */,
    "--color-dark": "#111827" /* Slightly lighter Navy (Cards/Sections) */,
    "--color-white": "#F8FAFC" /* Off-white with a hint of blue (Text) */,
    "--color-gray": "#94A3B8" /* Cool Slate Gray (Secondary Text) */,
    "--color-accent": "#38BDF8" /* Sky Blue (Buttons/Links/Highlights) */,
    "--glass-bg": "rgba(15, 23, 42, 0.7)" /* Semi-transparent navy */,
  },
  // white: {
  //   "--color-black": "#060D0D" /* Deep Obsidian Green */,
  //   "--color-dark": "#0A1A1A" /* Dark Forest container color */,
  //   "--color-white": "#E1F2F2" /* Minty White text */,
  //   "--color-gray": "#6A8B8B" /* Desaturated Sage secondary text */,
  //   "--color-accent": "#2DD4BF" /* Bright Teal/Cyan accent */,
  //   "--glass-bg": "rgba(6, 13, 13, 0.7)",
  // },
  // platinum: {
  //   "--color-black": "#171717" /* Deep Onyx Background */,
  //   "--color-dark": "#262626" /* Polished Granite Card Color */,
  //   "--color-white": "#E5E5E5" /* Silver-White Text */,
  //   "--color-gray": "#A3A3A3" /* Muted Pewter secondary text */,
  //   "--color-accent": "#D4D4D4" /* Bright Brushed Silver Accent */,
  //   "--glass-bg": "rgba(23, 23, 23, 0.7)",
  // },
  // white: {
  //   "--color-black": "#E2E8F0" /* Light Metallic Background */,
  //   "--color-dark": "#F8FAFC" /* "Brushed Chrome" Card Color */,
  //   "--color-white": "#1E293B" /* Deep Charcoal Text */,
  //   "--color-gray": "#64748B" /* Cool Slate secondary text */,
  //   "--color-accent": "#94A3B8" /* Silver-Blue Accent */,
  //   "--glass-bg": "rgba(226, 232, 240, 0.7)",
  // },
  // white: {
  //   "--color-black": "#171717" /* Deep Onyx Background */,
  //   "--color-dark": "#262626" /* Polished Granite Card Color */,
  //   "--color-white": "#E5E5E5" /* Silver-White Text */,
  //   "--color-gray": "#A3A3A3" /* Muted Pewter secondary text */,
  //   "--color-accent": "#D4D4D4" /* Bright Brushed Silver Accent */,
  //   "--glass-bg": "rgba(23, 23, 23, 0.7)",
  // },
  // white: {
  //   "--color-black": "#F1F2F4" /* Cool Mercury Background */,
  //   "--color-dark": "#FFFFFF" /* Clean White surface */,
  //   "--color-white": "#334155" /* Slate-Steel Text */,
  //   "--color-gray": "#94A3B8" /* Soft Silver-Gray secondary text */,
  //   "--color-accent": "#0F172A" /* Midnight Steel Accent */,
  //   "--glass-bg": "rgba(241, 242, 244, 0.8)",
  // },
  // white: {
  //   "--color-black": "#F9F8F6" /* Soft Bone Background (Primary) */,
  //   "--color-dark": "#FFFFFF" /* Pure White for Card surfaces only */,
  //   "--color-white": "#1A1A1A" /* Soft Black for text (not pure black) */,
  //   "--color-gray": "#717171" /* Medium Gray for sub-text */,
  //   "--color-accent": "#5B21B6" /* Deep Royal Purple (or your choice) */,
  //   "--glass-bg": "rgba(249, 248, 246, 0.8)",
  // },
  white: {
    "--color-black": "#d2dbe4ff" /* Cloud Gray Background */,
    "--color-dark": "#cfd6dcff" /* Slightly lighter surface color */,
    "--color-white": "#0F172A" /* Midnight Navy for text */,
    "--color-gray": "#64748B" /* Cool Slate for sub-text */,
    "--color-accent": "#2563EB" /* Modern Blue accent */,
    "--glass-bg": "rgba(241, 245, 249, 0.8)",
  },
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    const root = document.documentElement;

    Object.entries(theme).forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
    });

    localStorage.setItem("theme", themeName);
  };

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const themeNames = Object.keys(themes);
      const currentIndex = themeNames.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themeNames.length;
      return themeNames[nextIndex];
    });
  };

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    themeName: currentTheme,
    toggleTheme,
    setTheme,
    isDark: currentTheme === "dark" || currentTheme === "darkBlue",
    availableThemes: Object.keys(themes),
  };

  // Use React.createElement instead of JSX
  return React.createElement(ThemeContext.Provider, { value: value }, children);
};

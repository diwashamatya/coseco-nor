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

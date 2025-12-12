export type ThemeMode = "dark" | "light";

const STORAGE_KEY = "theme";

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "dark" || value === "light") {
    return value;
  }
  return null;
}

export function setStoredTheme(mode: ThemeMode) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, mode);
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const body = document.body;

  // Remove dark class from both elements
  root.classList.remove("dark");
  body.classList.remove("dark");

  // Add dark class only if mode is "dark"
  if (mode === "dark") {
    root.classList.add("dark");
    body.classList.add("dark");
  }

  root.setAttribute("data-theme", mode);
  body.setAttribute("data-theme", mode);

  root.style.setProperty("color-scheme", mode === "dark" ? "dark" : "light");
  body.style.setProperty("color-scheme", mode === "dark" ? "dark" : "light");
}

export function detectInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = getStoredTheme();
  if (stored) {
    return stored;
  }

  const prefersDark = typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

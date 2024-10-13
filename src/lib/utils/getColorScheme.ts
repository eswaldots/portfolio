export const getColorScheme = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("theme") ?? "system";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// frontend/theme.config.ts
export const defaultTheme = {
  font: "system", // "system" | "inter" | "kumbh"
  color: "green"  // "green" | "orange" | "blue"
};

/*
 How to use:
 - To change default font/palette for the whole site before running,
   edit these values. SettingsProvider reads them on client init.
 - This is intentionally a code-time change (not runtime UI).
*/

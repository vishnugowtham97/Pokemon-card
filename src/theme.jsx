import { createTheme } from "@mui/material/styles";

// Light theme configuration
export const lightTheme = createTheme({
  palette: {
    mode: "light", // Specifies the light mode
    primary: {
      main: "#3f51b5", // Primary color for the light theme
    },
    secondary: {
      main: "#f50057", // Secondary color for the light theme
    },
    background: {
      default: "#cdcdff", // Default background color
      paper: "#f5f5f5", // Background color for paper surfaces
    },
  },
});

// Dark theme configuration
export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Specifies the dark mode
    primary: {
      main: "#90caf9", // Primary color for the dark theme
    },
    secondary: {
      main: "#f48fb1", // Secondary color for the dark theme
    },
    background: {
      default: "#23283e", // Default background color
      paper: "#2a2f4c", // Background color for paper surfaces
    },
  },
});

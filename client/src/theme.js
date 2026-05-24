import { createTheme } from "@mui/material";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#00b4d8", // Vibrant cyan/blue
          },
          secondary: {
            main: "#9c27b0",
          },
          background: {
            default: "#f4f6f8",
            paper: "#ffffff",
          },
        }
      : {
          primary: {
            main: "#00e5ff", // Neon electric blue
          },
          secondary: {
            main: "#d500f9",
          },
          background: {
            default: "#0a192f", // Deep slate/navy
            paper: "#112240",
          },
          text: {
            primary: "#e6f1ff",
            secondary: "#8892b0",
          },
        }),
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
          borderWidth: "1.5px",
          borderRadius: "12px",
          borderColor: mode === "dark" ? "#233554" : "#e0e0e0",
          backgroundColor: mode === "dark" ? "#112240" : "#ffffff",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: mode === "dark" ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "0 10px 20px rgba(0,0,0,0.05)",
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

const theme = createTheme(getDesignTokens("light"));
export default theme;

"use client";

import { Comfortaa } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const comicTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#711E24",
      main: "#4e1519", //icons on tab bar, outlined buttons
      dark: "#280B0D",
      contrastText: "#3C423A", //product card header
    },
    secondary: {
      light: "#1E716B",
      main: "#154E4A", //cart button
      dark: "#0B2826",
      contrastText: "#fff", //appbar florist name and menu color
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: comfortaa.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          overflow-y: scroll;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
          color: "#3C423A",
        },
      },
    },
  },
  customStyles: {
    topNavButton: {
      color: "#3C423A",
    },
  },
});

export default comicTheme;

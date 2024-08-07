"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const roboto = Roboto({
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

const floristDefaultTheme = createTheme({
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
      light: "#fed7c1",
      main: "#ffa56c",
      dark: "#f77c18",
      contrastText: "#000000de",
    },
    secondary: {
      light: "#98d9ff",
      main: "#76cafe",
      dark: "#63bffd",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
          backgroundColor: "rgba(118, 202, 254, 0.5)",
          backdropFilter: "blur(8px)",
        },
      },
    },
  },
  customStyles: {
    topNavButton: {
      color: "#fff",
    },
  },
});

export default floristDefaultTheme;

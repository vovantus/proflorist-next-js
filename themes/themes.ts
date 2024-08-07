import { Theme } from "@mui/material";
import comicTheme from "./comicTheme";
import floristDefaultTheme from "./floristDefaultTheme";
import platformTheme from "./platformTheme";

interface Themes {
  [key: string]: Theme;
  comic: Theme;
  platform: Theme;
  default: Theme;
}

const themes: Themes = {
  comic: comicTheme,
  platform: platformTheme,
  default: floristDefaultTheme,
};

export default themes;

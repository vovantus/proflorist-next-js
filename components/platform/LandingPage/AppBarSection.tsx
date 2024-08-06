import { Typography, AppBar, Toolbar } from "@mui/material";

export default function AppBarSection() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6">Proflorist</Typography>
      </Toolbar>
    </AppBar>
  );
}

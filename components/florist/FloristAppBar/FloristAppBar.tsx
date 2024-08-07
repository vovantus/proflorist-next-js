import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import NavMenu, { NavLink } from "./NavMenu";
import UserMenu from "./UserMenu";

interface FloristAppBarProps {
  floristName: string;
  pages: NavLink[];
}

function FloristAppBar({ floristName, pages }: FloristAppBarProps) {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{
        backgroundColor: "rgba(118, 202, 254, 0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalFloristOutlinedIcon
            sx={{ display: { xxs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xxs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {floristName}
          </Typography>
          <NavMenu pages={pages} />
          <LocalFloristOutlinedIcon
            sx={{ display: { xxs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xxs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {floristName}
          </Typography>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FloristAppBar;

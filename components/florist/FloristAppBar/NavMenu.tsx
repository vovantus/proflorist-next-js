"use client";

import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent, useState } from "react";
import Link from "next/link";
import { useTheme } from "@mui/material";

export interface NavLink {
  text: string;
  to: string;
}

export default function NavMenu({ pages }: { pages: NavLink[] }) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xxs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          disableScrollLock
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          variant="menu"
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xxs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem
              autoFocus={false}
              component={Link}
              selected={false}
              href={page.to}
              key={page.text}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{page.text}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xxs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            component={Link}
            href={page.to}
            key={page.text}
            onClick={handleCloseNavMenu}
            sx={{
              ...theme.customStyles.topNavButton,
            }}
          >
            {page.text}
          </Button>
        ))}
      </Box>
    </>
  );
}

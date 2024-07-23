"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";

// paths in decending order, parent paths at the end
const tabRoutes = ["/news", "/cart", "/catalog", "/"];

export default function BottomNav() {
  const cartCounter = 10;
  const pathname = usePathname();
  console.log(pathname);
  const getCurrentTab = () => {
    const currentTab = tabRoutes.find((el) => pathname.startsWith(el));
    return currentTab === "/" ? pathname : currentTab;
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={getCurrentTab()}
        sx={{
          minHeight: "64px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        <BottomNavigationAction
          icon={<ArticleOutlinedIcon />}
          label="News"
          value={tabRoutes[0]}
          href={tabRoutes[0]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<YardOutlinedIcon />}
          label="Showcase"
          value={tabRoutes[3]}
          href={tabRoutes[3]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<GridViewOutlinedIcon />}
          label="Catalog"
          value={tabRoutes[2]}
          href={tabRoutes[2]}
          component={Link}
        />

        <BottomNavigationAction
          icon={
            <Badge
              badgeContent={cartCounter}
              color="primary"
              max={99}
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                },
              }}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          }
          label="Cart"
          value={tabRoutes[1]}
          href={tabRoutes[1]}
          component={Link}
        />
      </BottomNavigation>
    </Paper>
  );
}

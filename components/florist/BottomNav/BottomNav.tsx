"use client";

import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useCart } from "@/store/store";

interface BottomNavProps {
  tabs: {
    link: string;
    label: string;
    icon: ReactNode;
    order: Number;
  }[];
}

export default function BottomNav({ tabs }: BottomNavProps) {
  const cartTotalQuantity = useCart((state) => state.cartTotalQuantity);
  const tabRoutes = tabs
    .map((tab) => tab.link)
    .sort()
    .reverse();

  const pathname = usePathname();
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
         
        {tabs.map((tab) => (
          <BottomNavigationAction
            icon={
              tab.label === "Cart" ? (
                <Badge
                  badgeContent={cartTotalQuantity}
                  color="primary"
                  max={99}
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                    },
                  }}
                >
                  {tab.icon}
                </Badge>
              ) : (
                tab.icon
              )
            }
            label={tab.label}
            value={tab.link}
            href={tab.link}
            component={Link}
            key={tab.label}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

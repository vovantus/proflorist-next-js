import BottomNav from "@/components/florist/BottomNav/BottomNav";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

const tabs = [
  { link: "/news", label: "News", icon: <ArticleOutlinedIcon />, order: 1 },
  { link: "/", label: "Showcase", icon: <YardOutlinedIcon />, order: 2 },
  {
    link: "/catalog",
    label: "Catalog",
    icon: <GridViewOutlinedIcon />,
    order: 3,
  },
  {
    link: "/cart",
    label: "Cart",
    icon: <ShoppingCartOutlinedIcon />,
    order: 4,
  },
];

export default function Footer() {
  return <BottomNav tabs={tabs} />;
}

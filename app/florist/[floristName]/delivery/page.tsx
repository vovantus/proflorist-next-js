import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Storefront from "@mui/icons-material/Storefront";
import Event from "@mui/icons-material/Event";
import floristApi from "@/lib/floristApi";
import { createDeliveryInfoFromDoc } from "@/utils/dataTransforms";

const deliveries = {
  courier: {
    icon: <LocalShipping />,
    label: "Home Delivery",
    value: "We deliver to your doorstep",
    link: "#",
  },
  pickup: {
    icon: <Storefront />,
    label: "In-Store Pickup",
    value: "Pick up at our store",
    link: "#",
  },
  event: {
    icon: <Event />,
    label: "Event Delivery",
    value: "We deliver to your events",
    link: "#",
  },
};

export default async function DeliveryPage({
  params,
}: {
  params: { floristName: string };
}) {
  const infoDoc = await floristApi.fetchStaticInfo(
    params.floristName,
    "delivery"
  );
  const info = createDeliveryInfoFromDoc(infoDoc);

  return (
    <Card sx={{ width: 345, margin: "auto", marginTop: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Delivery Options
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {info.text}
        </Typography>

        <List>
          {info.deliveryOptions &&
            Object.entries(info.deliveryOptions)
              .filter((item) => item[1])
              .map(([key, value], index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    {deliveries[key as keyof typeof deliveries].icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={value}
                    secondary={deliveries[key as keyof typeof deliveries].label}
                  />
                </ListItem>
              ))}
        </List>
      </CardContent>
    </Card>
  );
}

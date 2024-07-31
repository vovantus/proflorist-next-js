import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <Card
      sx={{
        minWidth: 350,
        position: { xxs: "fixed", md: "sticky" },
        bottom: { xxs: "68px", md: "" },
        top: { xxs: "", md: "80px" },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textAlign: "start" }}
          color="text.secondary"
          gutterBottom
        >
          Your basket
        </Typography>
        <Typography variant="h5" component="div">
          Basket is empty
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Please, go to showcase
        </Typography>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          sx={{ width: "100%" }}
          component={Link}
          href={"/"}
        >
          Go to showcase
        </Button>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function ErrorCard() {
  return (
    <Card
      sx={{
        minWidth: 350,
        position: "sticky",
        top: "80px",
      }}
    >
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Error. Something went wrong.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Please, go to showcase. And try again.
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

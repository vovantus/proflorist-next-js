import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NoNews() {
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
          No news.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          We hope to get some news later.
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

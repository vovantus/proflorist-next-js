import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NoBouquets() {
  return (
    <Card
      sx={{
        gridColumn: "1 / -1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
        height: "100%",
        py: 1,
      }}
    >
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          No bouquets here.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Please, go to another category.
        </Typography>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          sx={{ width: "100%" }}
          component={Link}
          href={"/catalog"}
        >
          Go to categories
        </Button>
      </CardContent>
    </Card>
  );
}

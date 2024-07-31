import { Button, Card, CardContent, Skeleton, Typography } from "@mui/material";

export default function CartTotalSkeleton() {
  return (
    <Card
      elevation={6}
      sx={{
        minWidth: 350,
        position: { xxs: "fixed", md: "sticky" },
        bottom: { xxs: "68px", md: "" },
        top: { xxs: "", md: "80px" },
        bgcolor: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textAlign: "end" }}
          color="text.secondary"
          gutterBottom
        >
          <Skeleton width={"100%"} />
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "end" }}>
          <Skeleton width={"100%"} />
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: "end" }} color="text.secondary">
          <Skeleton width={"100%"} />
        </Typography>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          sx={{ width: "100%" }}
        >
          <Skeleton width={"100%"} />
        </Button>
      </CardContent>
    </Card>
  );
}

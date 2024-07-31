import { Button, Card, CardContent, Skeleton, Typography } from "@mui/material";

interface CartTotalProps {
  isLoading: boolean;
  cartTotalQuantity: number;
  cartTotal?: number;
  proceedToCheckout: () => void;
}

export default function CartTotal({
  isLoading,
  cartTotalQuantity,
  cartTotal,
  proceedToCheckout,
}: CartTotalProps) {
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
          Total:
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "end" }}>
          {isLoading ? <Skeleton width={"100%"} /> : `${cartTotal}€`}
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: "end" }} color="text.secondary">
          {`${cartTotalQuantity} bouquets`}
        </Typography>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          sx={{ width: "100%" }}
          onClick={() => proceedToCheckout()}
        >
          Proceed to checkout
        </Button>
      </CardContent>
    </Card>
  );
}

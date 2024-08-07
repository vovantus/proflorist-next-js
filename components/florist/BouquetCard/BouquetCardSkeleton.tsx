import { Typography, Card, Skeleton, CardContent, Box } from "@mui/material";
import { forwardRef } from "react";

const BouquetCardSkeleton = forwardRef<HTMLDivElement>(
  function BouquetCardSkeleton(_props, ref) {
    return (
      <Card
        ref={ref}
        sx={{
          width: 350,
          height: 350,
          position: "relative",
          borderRadius: "24px",
        }}
      >
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            borderRadius: "24px",
            position: "absolute",
            top: "0px",
            left: "0px",
            width: 350,
            height: 350,
          }}
        />

        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "rgba(255, 255, 255, 0.8)",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
            pt: 1,
            ":last-child": { pb: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textWrap: "nowrap",
                overflow: "clip",
                textOverflow: "ellipsis",
                textDecoration: "none",
                color: "inherit",
                pr: 1,
                width: 200,
              }}
            >
              <Skeleton width="150px" />
            </Typography>
            <Typography variant="body2">
              {" "}
              <Skeleton width="110px" />
            </Typography>
          </Box>
          <Typography variant="subtitle1" component="div">
            <Skeleton width="40px" />
          </Typography>
        </CardContent>
      </Card>
    );
  }
);

export default BouquetCardSkeleton;

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Testimonials } from "./TestimonialsSection";
import Image from "next/image";

interface TestimonialsCardProps {
  testimonial: Testimonials;
  lastCard: boolean;
}

export default function TestimonialsCard({
  testimonial,
  lastCard,
}: TestimonialsCardProps) {
  return (
    <Grid
      item
      xxs={12}
      xs={6}
      sm={4}
      sx={
        lastCard
          ? { display: { xxs: "none", xs: "block", sm: "none" } }
          : { display: "auto" }
      }
    >
      <Card sx={{ height: "100%" }}>
        <CardMedia sx={{ height: 300, width: "100%", position: "relative" }}>
          <Image
            src={testimonial.img}
            alt={`Florist ${testimonial.name}`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1" gutterBottom component="div">
            {testimonial.quote}
          </Typography>
          <Typography variant="h6" component="div" sx={{ textAlign: "end" }}>
            {testimonial.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

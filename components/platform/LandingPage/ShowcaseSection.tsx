import { Grid, Typography, Box } from "@mui/material";
import { headers } from "next/headers";
import ShowcaseCard from "./ShowcaseCard";

export interface Showcase {
  img: string;
  title: string;
  link: string;
}

interface ShowcaseSectionProps {
  showcases: Showcase[];
}

export default function ShowcaseSection({ showcases }: ShowcaseSectionProps) {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  return (
    <Box sx={{ my: 4, py: 4, px: 2, bgcolor: "grey.100" }}>
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", mb: 2, fontWeight: 400 }}
        align="center"
      >
        Our Customers
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 4, fontSize: "1rem" }}>
        We are not accepting new customers at the moment. However, you can
        explore the beautiful displays from our existing clients.
      </Typography>
      <Grid container spacing={2}>
        {showcases.map((showcase) => (
          <ShowcaseCard
            key={showcase.link}
            showcase={showcase}
            link={`${protocol}://${showcase.link}.${host}`}
          />
        ))}
      </Grid>
    </Box>
  );
}

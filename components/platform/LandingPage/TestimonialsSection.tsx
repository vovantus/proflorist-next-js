import { Container, Grid, Typography, Box } from "@mui/material";
import TestimonialsCard from "./TestimonialsCard";

export interface Testimonials {
  img: string;
  quote: string;
  name: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonials[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <Box sx={{ py: 6, bgcolor: "grey.100" }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: "2rem", mb: 2, fontWeight: 400 }}
        >
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={testimonial.name}
              testimonial={testimonial}
              lastCard={testimonials.length - index === 1}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

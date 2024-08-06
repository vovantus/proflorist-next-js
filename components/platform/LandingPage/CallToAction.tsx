import { Container, Typography, Button, Box } from "@mui/material";
import bgImage from "@/assets/images/platform/landing/ctaBg.jpg";

export default function CallToActionSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        textAlign: "center",
        color: "white",
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ px: 2, py: 4, bgcolor: "rgba(0,0,0,0.5)" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Create Your Florist Website?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Join our platform today and start building your dream website.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component="a"
          href="#showcase"
        >
          Sign Up Now
        </Button>
      </Container>
    </Box>
  );
}

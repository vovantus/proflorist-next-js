import { Typography, Box, Button } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.800", color: "white", py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Button color="inherit" component="a" href="#features">
          Features
        </Button>
        <Button color="inherit" component="a" href="#showcase">
          Showcase
        </Button>
        <Button color="inherit" component="a" href="#testimonials">
          Testimonials
        </Button>
      </Box>
      <Typography variant="body2" align="center" mt={2}>
        &copy; 2024 Proflorist. All rights reserved.
      </Typography>
    </Box>
  );
}

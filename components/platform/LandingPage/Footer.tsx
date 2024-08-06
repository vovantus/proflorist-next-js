import { Container, Typography, Button, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.800", color: "white", py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <a href="#features">Features</a>
        <a href="#showcase">Showcase</a>
        <a href="#testimonials">Testimonials</a>
      </Box>
      <Typography variant="body2" align="center" mt={2}>
        &copy; 2024 Proflorist. All rights reserved.
      </Typography>
    </Box>
  );
}

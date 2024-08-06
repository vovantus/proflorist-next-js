import { Typography, Button, Box } from "@mui/material";
import Image from "next/image";

import heroImage from "@/assets/images/platform/landing/hero.jpg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 3,
        height: { xxs: "500px", sm: "400px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xxs: "500px", sm: "400px" },
          position: "relative",
        }}
      >
        <Image
          src={heroImage}
          alt="Proflorist platform"
          priority
          fill
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAZCAYAAABHLbxYAAAAL0lEQVR42u3OAQ0AAAgDIJ/QInazojncIAGp2a4HIioqKioqKioqKioqKioq+jZ69PgjdFlhUbwAAAAASUVORK5CYII="
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          color: "white",
          bottom: 10,
          left: { xxs: 10, sm: "50%" },
          right: 10,
          bgcolor: "rgba(0, 0, 0, 0.6)",
          p: 3,
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xxs: "2.0rem", md: "2.5rem" },
            mb: 1,
          }}
        >
          Sign up today to create your stunning online florist store!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xxs: "1.0rem", sm: "1.3rem" },
            display: { xxs: "none", xs: "block" },
            mb: 2,
          }}
        >
          Join our platform to get your own stunning website and showcase your
          floral designs effortlessly.
        </Typography>
        <Button
          component="a"
          href="#showcase"
          variant="contained"
          color="secondary"
          size="medium"
          sx={{
            fontSize: { sm: "0.95rem" },
            px: { sm: "22px" },
            py: { sm: "8px" },
            cursor: "pointer",
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

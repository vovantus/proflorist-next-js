import { Box, Container, Typography } from "@mui/material";

export default function FloristNotFound({ subdomain }: { subdomain: string }) {
  return (
    <Container
      sx={{
        px: { xxs: "8px", md: "8px" },
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          pb: 9,
          pt: { xxs: 8, sm: 10 },
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "3rem" }}>
          Error, please check florist address:
        </Typography>
        <Typography variant="h2">{subdomain}</Typography>
      </Box>
    </Container>
  );
}

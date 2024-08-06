import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import Image from "next/image";

interface Feature {
  icon: string;
  header: string;
  text: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: "2rem", mb: 2, fontWeight: 400 }}
        >
          Proflorist Features
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xxs={12} sm={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: { xs: "center", md: "start" },
                      justifyContent: "start",
                    }}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.header}
                      width={56}
                      height={56}
                      style={{ borderRadius: 28, margin: 8 }}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAZCAYAAABHLbxYAAAAL0lEQVR42u3OAQ0AAAgDIJ/QInazojncIAGp2a4HIioqKioqKioqKioqKioq+jZ69PgjdFlhUbwAAAAASUVORK5CYII="
                    />

                    <Typography variant="h5" gutterBottom>
                      {feature.header}
                    </Typography>
                  </Box>
                  <Typography>{feature.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

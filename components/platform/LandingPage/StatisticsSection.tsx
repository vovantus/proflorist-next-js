import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

interface Statistics {
  value: string;
  text: string;
}

interface StatisticsSectionProps {
  statistics: Statistics[];
}

export default function StatisticsSection({
  statistics,
}: StatisticsSectionProps) {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: "2rem", mb: 2, fontWeight: 400 }}
        >
          Why Choose Proflorist?
        </Typography>
        <Grid container spacing={4}>
          {statistics.map((stat, index) => (
            <Grid item xxs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h3" component="h4" align="center">
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {stat.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

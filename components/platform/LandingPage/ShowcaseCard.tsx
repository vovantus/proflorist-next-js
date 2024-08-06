import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Showcase } from "./ShowcaseSection";

interface ShowcaseCardProps {
  showcase: Showcase;
  link: string;
}

export default function ShowcaseCard({ showcase, link }: ShowcaseCardProps) {
  return (
    <Grid item xxs={12} sm={4} key={showcase.link}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          sx={{
            height: { xxs: 300, md: 200 },
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={showcase.img}
            alt={`Florist ${showcase.title}`}
            fill
            style={{
              objectFit: "cover",
            }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAZCAYAAABHLbxYAAAAL0lEQVR42u3OAQ0AAAgDIJ/QInazojncIAGp2a4HIioqKioqKioqKioqKioq+jZ69PgjdFlhUbwAAAAASUVORK5CYII=
"
          />
        </CardMedia>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 2,
            ":last-child": { pb: 2 },
            height: { xxs: "auto", sm: 104, md: "auto" },
          }}
        >
          <Typography variant="h6" component="p" sx={{ fontSize: "1.2rem" }}>
            {showcase.title}
          </Typography>
          <Button
            component="a"
            variant="contained"
            color="secondary"
            size="small"
            disableElevation
            href={link}
            target="_blank"
            sx={{
              width: 95,
            }}
          >
            Visit Store
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

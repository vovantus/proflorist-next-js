"use client";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
  Skeleton,
} from "@mui/material";
import News from "@/lib/types/News";
import Link from "next/link";
import { useState, memo } from "react";
import Image from "next/image";

interface NewsCardProps {
  news: News;
}

const NewsCard = memo(function NewsCard({ news }: NewsCardProps) {
  const [imgLoading, setImageLoading] = useState(true);

  const dateString = news.date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "long",
    day: "2-digit",
  });

  return (
    <Card
      sx={{
        width: { xxs: 360, sm: 720 },
        position: "relative",
        display: { xxs: "block", sm: "flex" },
        justifyContent: "end",
      }}
    >
      <Box>
        <Image
          height={360}
          width={360}
          style={{
            opacity: imgLoading ? 0 : 1,
            transition: "opacity 0.8s ease-in-out",
          }}
          src={news.imageUrl}
          alt={news.header}
          onLoad={() => setImageLoading(false)}
        />
        {imgLoading && (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 360,
              height: 360,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: { xxs: "auto", sm: 0 },
          bgcolor: "rgba(255,255,255,0.85)",
          width: { xxs: "100%", sm: 360 },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.header}
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {dateString}
          </Typography>
          <Typography variant="body2">{news.text}</Typography>
        </CardContent>

        {news.categoryId && (
          <CardActions>
            <Button
              component={Link}
              href={`/catalog/${news.categoryId}`}
              size="small"
              color="primary"
            >
              {news.linkTitle ?? "Show boouquets"}
            </Button>
          </CardActions>
        )}
      </Box>
    </Card>
  );
});

export default NewsCard;

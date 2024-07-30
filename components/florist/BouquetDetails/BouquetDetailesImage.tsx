"use client";

import { Box, Skeleton, CardMedia } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

export default function BouquetDetailesImage({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: { xxs: "100%", sm: "50%" },
        aspectRatio: "1 / 1",
        position: "relative",
      }}
    >
      <Image
        src={imageUrl}
        alt={name}
        fill
        priority={false}
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          cursor: "pointer",
        }}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />

      {!imageLoaded && (
        <Skeleton
          component="div"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "none",
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </Box>
  );
}

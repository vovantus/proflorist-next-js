import floristApi from "@/lib/floristApi";
import { createAboutFromDocument } from "@/utils/dataTransforms";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

export default async function AboutPage({
  params,
}: {
  params: { floristName: string };
}) {
  const infoDoc = await floristApi.fetchStaticInfo(params.floristName, "about");
  const info = createAboutFromDocument(infoDoc);

  const convertTextToParagraps = (text: string) => {
    return text.split("\\n").map((el, index) => {
      return (
        <Typography key={index} variant="body2">
          {el}
        </Typography>
      );
    });
  };

  return (
    <Card sx={{ width: { xxs: 400, sm: 720 }, pb: 2 }}>
      <Box
        sx={{
          width: { xxs: "100%", sm: 400 },
          float: { xxs: "none", sm: "right" },
          aspectRatio: "1 / 1",
          position: "relative",
        }}
      >
        <CardMedia
          sx={{
            width: "100%",
          }}
        >
          <Image
            src={info.image}
            alt="about"
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsO/WvHgAGuwK/noQpBgAAAABJRU5ErkJggg=="
          />
        </CardMedia>
      </Box>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {info?.header}
        </Typography>
        {convertTextToParagraps(info.text)}
      </CardContent>
    </Card>
  );
}

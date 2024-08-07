import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

export interface SnackBarMessage {
  message: string;
  key: number;
}

export default function SnackBarAlerts({
  snackPack,
  popSnackPack,
}: {
  snackPack: SnackBarMessage[];
  popSnackPack: () => void;
}) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageInfo, setMessageInfo] = useState<SnackBarMessage | undefined>(
    undefined
  );
  const theme = useTheme();

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      popSnackPack();
      setShowSnackbar(true);
    } else if (snackPack.length && messageInfo && showSnackbar) {
      setShowSnackbar(false);
    }
  }, [snackPack, messageInfo, showSnackbar, popSnackPack]);

  const handleSnackbarExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      open={showSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={1000}
      onClose={() => setShowSnackbar(false)}
      TransitionProps={{ onExited: handleSnackbarExited }}
      sx={{ top: { xxs: 64, sm: 80 } }}
    >
      <Alert
        icon={false}
        severity="info"
        variant="outlined"
        sx={{
          width: "100%",
          color: theme.palette.secondary.contrastText,
          bgcolor: theme.palette.secondary.main,
        }}
      >
        {`${messageInfo?.message} added to cart`}
      </Alert>
    </Snackbar>
  );
}

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme(); // גישה לתבנית הנוכחית
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#272727" : "#3f51b5", // הגדרת צבע לפי מצב התבנית
        color: "white",
        padding: "10px 0",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        borderRadius: "3px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2">
          {t("footer.copyright", { year: new Date().getFullYear() })} |{" "}
          {t("footer.localTime", { time: currentTime })}
        </Typography>
      </Container>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/home/store/map");
        }}
      >
        {t("footer.location")}
      </Button>
    </Box>
  );
};

export default Footer;
